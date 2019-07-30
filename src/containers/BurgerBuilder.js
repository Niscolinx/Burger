import React, { Component } from "react";
<<<<<<< HEAD
import {connect} from 'react-redux'
=======
import { connect } from 'react-redux'
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc

import Burger from '../components/Burger/Burger'
import BuildControls from "../components/Burger/BuildControl/BuildControls"
import Modal from "../components/Modal/Modal"
import Aux from "../components/hoc/HigherOrder"
import withErrorHandler from "../components/hoc/withErrorHandler"
import axios from "../axios"
import Spinner from "../components/Layout/spinner"
import OrderSummary from "../components/Modal/OrderSummary"
<<<<<<< HEAD
import * as actionTypes from '../store/actions'
=======
import * as burgerActions from '../store/actions/burgerIndex'
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc


class BurgerBuilder extends Component {
  state = {
<<<<<<< HEAD
    purchasable: false,
    orderSummary: false,
    loading: false,
    error: false
=======
    orderSummary: false,
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
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
<<<<<<< HEAD
    
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
=======

    this.props.history.push('/Checkout');
  }
  componentDidMount() {
    this.props.onInitIngredients()
  };

>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
  orderbtn = newIng => {

    const orderIng = Object.values(newIng).reduce((orderIng, el) => {
      return orderIng + el;
    }, 0);

<<<<<<< HEAD
    
    return orderIng > 0
   };
=======

    return orderIng > 0
  };
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc


  render() {
    let ingDisabled = { ...this.props.ingredients };
<<<<<<< HEAD
    
=======

>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
    for (let ing in ingDisabled) {
      ingDisabled[ing] = ingDisabled[ing] <= 0;
    }
    let totalSummary = null;

<<<<<<< HEAD
    let burger = this.state.error ? (
      <p style ={{
=======
    let burger = this.props.error ? (
      <p style={{
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
        textAlign: 'center',
        fontSize: '1.4rem'
      }}>Ingredients can't be loaded. Please check your internet connection</p>
    ) : (
<<<<<<< HEAD
      <div style={{ textAlign: "center" }}>
        <Spinner />
      </div>
    );
=======
        <div style={{ textAlign: "center" }}>
          <Spinner />
        </div>
      );
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
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
<<<<<<< HEAD
    if (this.state.loading) {
      totalSummary = <Spinner />;
    }
=======
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc

    return (
      <div>
        <Modal
          orderSummary={this.state.orderSummary}
<<<<<<< HEAD
          clicked={this.orderCancel}
        >
=======
          clicked={this.orderCancel}>

>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          {totalSummary}
        </Modal>
        {burger}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
<<<<<<< HEAD
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable
=======
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice,
    error: state.burger.error
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
  }
}
const mapDispatchToProps = dispatch => {
  return {
<<<<<<< HEAD
    onAddIngredient: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
    onRemoveIngredient: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
=======
    onAddIngredient: (ingName) => dispatch(burgerActions.addIngredient(ingName)),
    onRemoveIngredient: (ingName) => dispatch(burgerActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerActions.setIngredients())
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
