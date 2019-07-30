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


class BurgerBuilder extends Component {
  state = {
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
    
    this.props.history.push('/Checkout');

  //componentDidMount() {
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

    const orderIng = Object.values(newIng).reduce((orderIng, el) => {
      return orderIng + el;
    }, 0);

    
    return orderIng > 0
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
            purchasable={this.orderbtn(this.props.ingredients)}
            addIngredient={this.props.onAddIngredient}
            removeIngredient={this.props.onRemoveIngredient}
            price={this.props.totalPrice}
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
          price={this.props.totalPrice}
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
    totalPrice: state.totalPrice,
    purchasable: state.purchasable
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
    onRemoveIngredient: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
