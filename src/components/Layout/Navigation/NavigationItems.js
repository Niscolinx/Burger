import React from 'react';
import NavigationItem from './NavigationItem'

const navigation = (props) => (
    
    <ul className='navigationItems'>

        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/Orders">{props.auth ? 'Orders' : null}</NavigationItem>
        <NavigationItem
        auth = {props.auth}
        logOut = {props.logOut}
        link='/Auth/login'>{props.auth ? 'Logout' : 'Login'}</NavigationItem>
    </ul>
)

export default navigation;