import React, {Component} from 'react';
import {connect} from 'react-redux'
import CheckoutSummary from '../components/Layout/CheckoutSummary'
import ContactData from './ContactData'
import {Route} from 'react-router-dom'

class Checkout extends Component{

    cancelCheckout = () => {
        this.props.history.goBack()
    }
    continued = () => {
        this.props.history.replace('/Checkout/checkout-data')
    }
    render(){
        return (
            <div>
            <CheckoutSummary 
                cancelCheckout = {this.cancelCheckout}
                continued = {this.continued}
                ingredient = {this.props.ingredients}
                price = {this.props.totalPrice}
            />
            
            <Route path = {this.props.match.url + '/checkout-data'} component = {ContactData}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);