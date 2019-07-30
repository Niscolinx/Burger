import React from 'react';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    
        <div className = 'BuildControls'>
             <h3>The price is ${props.price.toFixed(2)}</h3> 
        {controls.map(ctrl => {
            return <BuildControl
             key = {ctrl.label}
             label = {ctrl.label}
             added = {() => props.addIngredient(ctrl.type)}
             remove = {() => props.removeIngredient(ctrl.type)}
             disabled = {props.disabled[ctrl.type]}
             />
        })}
        <div className = 'btn-order'>
        <button
         disabled = {!props.purchasable}
         onClick = {props.summary}>
         order now</button>
        </div>
        </div>
    
)

export default buildControls;