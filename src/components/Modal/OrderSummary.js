import React from 'react';
import Button from './Button';
import Aux from '../hoc/HigherOrder';

const orderSummary = (props) => {
    const orderSummary = Object.keys(props.ingredients).map((igkey, i) => {
        return <li key = {i}><strong>{igkey}</strong>: {props.ingredients[igkey]}</li>
        })
        return <Aux>

        <h3>YOUR ORDER</h3>
        <h3>A delicious burger with the following ingredients:</h3>
        <ul>
            {orderSummary}
        </ul>
        <strong>The total price is: ${props.price.toFixed(2)}</strong>
        <h3>Continue to checkout?</h3>
        <Button btnType = 'Danger' clicked = {props.cancelled}>cancel</Button>
        <Button btnType = 'Success' clicked = {props.continue}>checkout</Button>
        </Aux>
}

export default orderSummary;