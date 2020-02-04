import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import * as actions from '../store/actions/burgerIndex'
import asyncComponent from '../components/hoc/asyncComponent'

import '../App.scss'
import Layout from "../components/Layout/Layout"
import Aux from "../components/hoc/HigherOrder"
import BurgerBuilder from './BurgerBuilder'
import { Route, Switch } from 'react-router-dom'



const asyncOrders = asyncComponent(() => {
  return import('./Orders')
})
const asyncCheckout = asyncComponent(() => {
  return import('../containers/Checkout')
})
const asyncAuth = asyncComponent(() => {
  return import('../containers/Auth')
})

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.onCheckState(localStorage.getItem('token'), localStorage.getItem('userId'))
    }
  }

  
  render() {

    let AuthGuard = (
      <Switch>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/Auth/login' component={asyncAuth} />
        <Route path='/Auth/register' component={asyncAuth} />
        <Redirect to='/'/>
      </Switch>
    )
    if (this.props.auth) {
      AuthGuard = (
        <Switch>
          <Route path='/Auth/login' component={asyncAuth} />
          <Route path='/Auth/register' component={asyncAuth} />
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/Checkout' component={asyncCheckout} />
          <Route path='/Orders' component={asyncOrders} />
          <Redirect to='/' />
        </Switch>

      )
    }
    return (
      <Aux>
        <Layout>
          {AuthGuard}
        </Layout>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.tokenId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckState: (tokenId, userId) => dispatch(actions.authSuccess(tokenId, userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
