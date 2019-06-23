import React, { Component } from "react";
import {connect} from 'react-redux'

import Burger from '../components/Burger/Burger'
import BuildControls from "../components/Burger/BuildControl/BuildControls"
import Modal from "../components/Modal/Modal"
import Aux from "../components/hoc/HigherOrder"
import withErrorHandler from "../components/hoc/withErrorHandler"
import axios from "../axios"
import Spinner from "../components/Layout/spinner"
import OrderSummary from "../components/Modal/OrderSummary"
import * as actionTypes from '../store/actions'

const INGREDIENT_PRICES = {
  salad: 0.8,
  bacon: 1.7,
  cheese: 2.3,
  meat: 1
};
class BurgerBuilder extends Component {
  state = {
    totalPrice: 4,
    purchasable: false,
    orderSummary: false,
    loading: false,
    error: false
  };

  orderSummary = () => {
    this.setState({
      orderSummary: true
    });
  };

  orderCancel = () => {
    this.setState({
      orderSummary: false
    });
  };

  orderContinue = () => {
    // this.setState({ loading: true });
    // const data = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Igboanugwo Collins",
    //     address: {
    //       zipcode: "453005",
    //       street: "testingstreet 2",
    //       country: "Germany"
    //     },
    //     email: "testing@test.com"
    //   },
    //   deliveryMethod: "fastest"
    // };
    // axios
    //   .post("/orders.json", data)
    //   //alert('You continued!!')
    //   .then(response => {
    //     this.setState({ loading: false, orderSummary: false });
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false, orderSummary: false });
    //   });

    const ingredients = {...this.props.ingredients}
    let ingData = []
    for(var ing in ingredients){
      ingData.push(encodeURIComponent(ing) + '=' + encodeURIComponent(ingredients[ing]))
    }
    ingData.push('totalPrice=' + this.state.totalPrice)
    const queryParam = ingData.join('&')
    this.props.history.push({
      pathname: '/Checkout',
      search: '?' + queryParam
    })
  };

  componentDidMount() {
    // axios
    //   .get("https://my-react-burger-1ce01.firebaseio.com/ingredients.json")
    //   .then(res => {
    //     this.setState({
    //       ingredients: res.data
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({ error: true });
    //   });
  }
  orderbtn = newIng => {
    // const orderIng = Object.keys(newIng).map(igkey => {
    //     return newIng[igkey]
    //   }
    // )
    // .reduce((orderIng, el) => {
    //     return orderIng + el
    // },0)

    const orderIng = Object.values(newIng).reduce((orderIng, el) => {
      return orderIng + el;
    }, 0);

    this.setState({
      purchasable: orderIng > 0
    });
  };

  addIngredient = type => {
    const oldIngredient = this.state.ingredients[type];
    const transformedIng = oldIngredient + 1;
    const newIng = {
      ...this.props.ingredients
    };
    newIng[type] = transformedIng;

    const oldPrice = INGREDIENT_PRICES[type];
    const prices = this.state.totalPrice;
    const newPrice = prices + oldPrice;
    this.setState({
      ingredients: newIng,
      totalPrice: newPrice
    });
    this.orderbtn(newIng);
  };

  removeIngredient = type => {
    const oldIngredient = this.state.ingredients[type];
    if (oldIngredient <= 0) {
      return;
    }
    const transformedIng = oldIngredient - 1;
    const newIng = {
      ...this.state.ingredients
    };
    newIng[type] = transformedIng;

    const oldPrice = INGREDIENT_PRICES[type];
    const prices = this.state.totalPrice;
    const newPrice = prices - oldPrice;
    this.setState({
      ingredients: newIng,
      totalPrice: newPrice
    });
    this.orderbtn(newIng);
  };

  render() {
    let ingDisabled = { ...this.props.ingredients };
    
    for (let ing in ingDisabled) {
      ingDisabled[ing] = ingDisabled[ing] <= 0;
    }
    let totalSummary = null;

    let burger = this.state.error ? (
      <p style ={{
        textAlign: 'center',
        fontSize: '1.4rem'
      }}>Ingredients can't be loaded. Please check your internet connection</p>
    ) : (
      <div style={{ textAlign: "center" }}>
        <Spinner />
      </div>
    );
    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            disabled={ingDisabled}
            summary={this.orderSummary}
            purchasable={this.state.purchasable}
            addIngredient={this.props.onAddIngredient}
            removeIngredient={this.props.onRemoveIngredient}
            price={this.state.totalPrice}
          />
          ;
        </Aux>
      );
      totalSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          orderSummary={this.state.orderSummary}
          cancelled={this.orderCancel}
          continue={this.orderContinue}
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      totalSummary = <Spinner />;
    }

    return (
      <div>
        <Modal
          orderSummary={this.state.orderSummary}
          clicked={this.orderCancel}
        >
          {totalSummary}
        </Modal>
        {burger}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
    onRemoveIngredient: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
