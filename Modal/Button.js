import React from 'react';

const button = (props) => (
    <button className = {['orderbutton', props.btnType].join(' ')}
    onClick = {props.clicked}>
        {props.children}
    </button>
)

export default button;