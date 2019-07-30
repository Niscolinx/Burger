import React, { Component } from 'react';
import '../App.scss';
import Layout from "../components/Layout/Layout";
import Aux from "../components/hoc/Aux";
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';


class App extends Component {

  render() {
    return (
      <Aux>
      <Layout>
      <BurgerBuilder/>
      </Layout>
      </Aux>
    );
  }
}


export default App;
