import React, { Component } from 'react';

import Aux from '../hoc/HigherOrder';
import Toolbar from './Toolbar';
import SideDrawer from './Navigation/SideDrawer';

class Layout extends Component{
    state = {
        sideDrawerShow:false,
    }

    sideDrawerHide = () => {
        this.setState({
            sideDrawerShow:false
        })
    }

    switchSideDrawerHandler = () =>{
        this.setState((prevState) =>{
           return { sideDrawerShow: !prevState.sideDrawerShow}
        })
    }
    render(){
        return(
            <Aux>
            <Toolbar openSideDrawer = {this.switchSideDrawerHandler}/>
            <SideDrawer closed = {this.sideDrawerHide} 
                open = {this.state.sideDrawerShow}
            />
            <main className = 'content'>
                {this.props.children}
            </main>
            </Aux>
        )
    }
}

export default Layout;