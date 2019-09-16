import React, { Component } from 'react';
import '../App.scss'
import Layout from "../components/Layout/Layout"
import Aux from "../components/hoc/HigherOrder"
import BurgerBuilder from './BurgerBuilder'
import { Route, Switch } from 'react-router-dom'
import Checkout from '../containers/Checkout'
import Orders from './Orders'
import Auth from '../containers/Auth'

class App extends Component {

  render() {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path='/Checkout' component={Checkout} />
            <Route path='/Orders' component={Orders} />
            <Route path='/' exact component={BurgerBuilder} />
            <Route path='/Auth/login' component={Auth} />
            <Route path='/Auth/register' component={Auth} />
          </Switch>
        </Layout>
      </Aux>
    );
  }
}


export default App;
