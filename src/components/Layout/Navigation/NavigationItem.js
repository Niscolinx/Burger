import React from 'react';

import {NavLink} from 'react-router-dom';

const navigationItem = (props) => (
    <li className = 'navigationItem'>
    <NavLink
     to = {props.link}
    activeClassName = 'active'
    className = 'navLink'
    exact = {props.exact}> {props.children}</NavLink>
    </li>

);


export default navigationItem;