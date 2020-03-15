import React from 'react';
import Logo from '../Logo';
import NavigationItems from './NavigationItems';
import Backdrop from '../../Modal/Backdrop';
import Aux from '../../hoc/HigherOrder';

const sideDrawer = (props) => {
    console.log('from the sidedrawer', props)

    let assigned = ['sideDrawer', 'close'];
    if(props.open){
        assigned = ['sideDrawer', 'open']
    }


    return(
        <Aux>
        <Backdrop orderSummary = {props.open}
                clicked = {props.closed}
        />
            <div className={assigned.join(' ')} onClick={props.clicked}>
        <Logo/>
        <nav>
            
            <NavigationItems auth = {props.auth}/>
        </nav>

        </div>
        </Aux>
    )
}

export default sideDrawer;