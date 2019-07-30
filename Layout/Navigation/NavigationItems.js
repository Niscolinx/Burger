import React from 'react';
import NavigationItem from './NavigationItem'

const navigation = () => (
    <ul className = 'navigationItems'>
        
        <NavigationItem link = "/" active>Checkout</NavigationItem>
        <NavigationItem link = "/">Burger Builder</NavigationItem>
        
    </ul>
)

export default navigation;