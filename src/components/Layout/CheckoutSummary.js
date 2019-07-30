import React from 'react';

import Burger from '../Burger/Burger'
import Button from '../Modal/Button'

const CheckoutSummary = (props) => {

    return(
    <div className = 'CheckoutSummary'>
        <h3>Welcome to the Checkout Summary</h3>
        <h4>This is the total price: ${parseFloat(props.price).toFixed(2)}</h4>
        <div>
            <Burger
                ingredients = {props.ingredient}
            />
        </div>
        <Button btnType = 'Danger' clicked = {props.cancelCheckout}>cancel</Button>
        <Button btnType = 'Success' clicked = {props.continued}>checkout</Button>
    </div>
    )

}

export default CheckoutSummary;