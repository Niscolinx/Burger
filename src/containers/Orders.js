import React, { Component } from 'react'
import Order from '../components/Layout/Order'
import axios from '../axios'
import withErrorHandler from '../components/hoc/withErrorHandler'
import { connect } from 'react-redux'
import * as actions from '../store/actions/burgerIndex'
import Spinner from '../components/Layout/spinner'

class Orders extends Component {

    componentDidMount() {
        this.props.onInitFetchedOrders()
    }

    render() {
        let spinner = <div style={{ textAlign: "center" }}><Spinner /></div>
        if (!this.props.loading) {
            spinner = this.props.order.map(order => {
                return <Order
                    price={order.price}
                    key={order.id}
                    ingredients={order.ingredients}
                />

            })
        }
        return spinner
    }
}
const mapStateToProps = state => {
    return {
        loading: state.order.loading,
        order: state.order.order
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInitFetchedOrders: () => dispatch(actions.fetchedOrdersInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));