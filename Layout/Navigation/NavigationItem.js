import React from 'react';

const navigationItem = (props) => (
    <li className = 'navigationItem'>
    <a
     href= {props.link}
    className = {props.active? 'active':null}> {props.children}</a>
    </li>

);

export default navigationItem;