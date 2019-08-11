import React from 'react';
import NavigationItem from './NavigationItem'

const navigation = () => (
    <ul className='navigationItems'>

        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/Checkout/checkout-data">Checkout</NavigationItem>
        <NavigationItem link="/Orders">Orders</NavigationItem>
        <NavigationItem link='/Auth'>Login</NavigationItem>
    </ul>
)

export default navigation;