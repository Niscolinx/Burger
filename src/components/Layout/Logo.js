import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
    <div className = 'logo' style ={{height: props.height}}>
        <img src= {burgerLogo} alt = 'burger-logo'/>
    </div>
)

export default logo;