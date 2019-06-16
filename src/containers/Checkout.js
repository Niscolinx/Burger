import React, {Component} from 'react';
import CheckoutSummary from '../components/Layout/CheckoutSummary'
import ContactData from './ContactData'
import {Route} from 'react-router-dom'

class Checkout extends Component{
    state = {
        ingredients : null,
        totalPrice: 0
    }

    componentWillMount(){
        let fetchedIng = new URLSearchParams(this.props.location.search)
        let ingredients = {}
        let totalPrice = 0
        for(let ing of fetchedIng.entries()){
            if(ing[0] === 'totalPrice'){
                totalPrice = ing[1]
            }
            else{
                ingredients[ing[0]] = +ing[1]
            }
        }
        this.setState({
            ingredients:ingredients,
            totalPrice:  totalPrice
        })
    }
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
                ingredient = {this.state.ingredients}
                price = {this.state.totalPrice}
            />
            
            <Route path = {this.props.match.url + '/checkout-data'} 
            render = {() => (<ContactData ingredients = {this.state.ingredients} totalPrice = {this.state.totalPrice} {...this.props}/>)} />
            </div>
        )
    }
}

export default Checkout;