import React, { Component } from "react";
import { connect } from 'react-redux'

import Burger from '../components/Burger/Burger'
import BuildControls from "../components/Burger/BuildControl/BuildControls"
import Modal from "../components/Modal/Modal"
import Aux from "../components/hoc/HigherOrder"
import withErrorHandler from "../components/hoc/withErrorHandler"
import axios from "../axios"
import Spinner from "../components/Layout/spinner"
import OrderSummary from "../components/Modal/OrderSummary"
<<<<<<< HEAD
import * as burgerActions from '../store/actions/burgerIndex'
=======
import * as actions from '../store/actions/burgerIndex'
>>>>>>> 39b880fee8e755f9765ca78e4dea8ae10a8ec21a


class BurgerBuilder extends Component {
  state = {
    orderSummary: false,
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

=======
    this.props.onOrderRedirect()
>>>>>>> 39b880fee8e755f9765ca78e4dea8ae10a8ec21a
    this.props.history.push('/Checkout');
  }
  componentDidMount() {
    this.props.onInitIngredients()
  };

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

    let burger = this.props.error ? (
      <p style={{
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

    return (
      <div>
        <Modal
          orderSummary={this.state.orderSummary}
          clicked={this.orderCancel}>

          {totalSummary}
        </Modal>
        {burger}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice,
    error: state.burger.error
  }
}
const mapDispatchToProps = dispatch => {
  return {
<<<<<<< HEAD
    onAddIngredient: (ingName) => dispatch(burgerActions.addIngredient(ingName)),
    onRemoveIngredient: (ingName) => dispatch(burgerActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerActions.setIngredients())
=======
    onAddIngredient: (ingName) => dispatch(actions.addIngredient(ingName)),
    onRemoveIngredient: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.setIngredients()),
    onOrderRedirect: () => dispatch(actions.orderRedirect())
>>>>>>> 39b880fee8e755f9765ca78e4dea8ae10a8ec21a
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
