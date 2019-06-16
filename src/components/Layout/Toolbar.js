import React from 'react';
import Logo from './Logo'
import NavigationItems from './Navigation/NavigationItems'
import SideDrawerToggle from './Navigation/SideDrawerToggle';

const toolbar = (props)=>(
    <div className = 'toolbar'>
        <SideDrawerToggle clicked = {props.openSideDrawer}/>
        <Logo/>
        <div>
            <nav className = 'desktopOnly'>
                <NavigationItems/>
            </nav>
        </div>
    </div>
)

export default toolbar;