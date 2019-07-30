import React, { Component } from 'react';
import '../App.scss'
import Layout from "../components/Layout/Layout"
import Aux from "../components/hoc/HigherOrder"
import BurgerBuilder from './BurgerBuilder'
<<<<<<< HEAD
import {Route, Switch} from 'react-router-dom'
=======
import { Route, Switch } from 'react-router-dom'
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
import Checkout from '../containers/Checkout'
import Orders from './Orders'

class App extends Component {

  render() {
    return (
      <Aux>
<<<<<<< HEAD
      <Layout>
      <Switch>
      <Route path = '/Checkout' component = {Checkout}/>
      <Route path = '/Orders' component = {Orders}/>
      <Route path = '/' exact component = {BurgerBuilder}/>
      </Switch>
      </Layout>
=======
        <Layout>
          <Switch>
            <Route path='/Checkout' component={Checkout} />
            <Route path='/Orders' component={Orders} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
      </Aux>
    );
  }
}


export default App;
