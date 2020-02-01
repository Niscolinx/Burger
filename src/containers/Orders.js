import React, { Component } from 'react'
import Order from '../components/Layout/Order'
import axios from '../axios'
import withErrorHandler from '../components/hoc/withErrorHandler'
import { connect } from 'react-redux'
import * as actions from '../store/actions/burgerIndex'
import Spinner from '../components/Layout/spinner'

class Orders extends Component {

    componentDidMount() {
        this.props.onInitFetchedOrders(this.props.auth, this.props.userId)
    }

    render() {
        let button = ''
        let spinner = <div style={{ textAlign: "center" }}><Spinner /></div>
        if (!this.props.loading) {
            button = <button className='deleteAllBtn' onClick={() => this.props.onDeleteAllOrders()}>Clear All</button>
            spinner = this.props.order.map(order => {
                return <Order
                    clicked={() => this.props.onDeleteOrder(order.id)}
                    price={order.price}
                    key={order.id}
                    ingredients={order.ingredients}
                />

            })
        }
        return <div> {button} {spinner}</div>
    }
}
const mapStateToProps = state => {
    return {
        loading: state.order.loading,
        order: state.order.order,
        auth: state.auth.tokenId,
        userId: state.auth.userId

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInitFetchedOrders: (auth, userId) => dispatch(actions.fetchedOrdersInit(auth, userId)),
        onDeleteOrder: (id) => dispatch(actions.fetchedOrderDelete(id)),
        onDeleteAllOrders: () => dispatch(actions.deleteAllOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));