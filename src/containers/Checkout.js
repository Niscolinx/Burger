import React, { Component } from 'react';
import { connect } from 'react-redux'
import CheckoutSummary from '../components/Layout/CheckoutSummary'
import ContactData from './ContactData'
import { Route, Redirect } from 'react-router-dom'

class Checkout extends Component {

    cancelCheckout = () => {
        this.props.history.goBack()
    }
    continued = () => {
        this.props.history.replace('/Checkout/checkout-data')
    }
    render() {
        let Summary = <Redirect to='/' />

        if (this.props.ingredients) {
            const orderRedirect = this.props.purchased ? <Redirect to='/' /> : null
            Summary = (
                <div>
                    {orderRedirect}
                    <CheckoutSummary
                        cancelCheckout={this.cancelCheckout}
                        continued={this.continued}
                        ingredient={this.props.ingredients}
                        price={this.props.totalPrice}
                    />

                    <Route path={this.props.match.url + '/checkout-data'} component={ContactData} />
                </div>
            )
        }
        return Summary
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps)(Checkout);
