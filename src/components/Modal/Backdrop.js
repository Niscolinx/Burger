import React from 'react';

console.log(props)
const backdrop = (props) => (
    props.orderSummary? <div className = 'backdrop' onClick = {props.clicked}></div>: null
)

export default backdrop;