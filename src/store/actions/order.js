import * as orderActions from './actionTypes'
import axios from '../../axios'

export const orderBurgerStart = (id, orderData) => {
    return {
        type: orderActions.BURGER_ORDER_START,
        orderId: id,
        orderData: orderData
    }
}

export const orderBurgerFailed = (error) => {
    return {
        type: orderActions.BURGER_ORDER_FAILED,
        error: error
    }
}
export const orderBurgerSuccess = () => {
    return {
        type: orderActions.BURGER_ORDER_SUCCESS
    }
}

export const orderRedirect = () => {
    return {
        type: orderActions.ORDER_REDIRECT
    }
}

export const initBurgerStart = (data) => {
    return dispatch => {
        dispatch(orderBurgerSuccess())
        axios
            .post("/orders.json", data)
            .then(response => {
                dispatch(orderBurgerStart(response.data.name, data))
            })
            .catch(error => {
                dispatch(orderBurgerFailed(error))
            });
    }
}

export const fetchedOrderStart = () => {
    return {
        type: orderActions.FETCHED_ORDERS_START
    }
}

export const fetchedOrdersFailed = err => {
    return {
        type: orderActions.FETCHED_ORDERS_FAILED,
        err: err
    }
}

export const fetchedOrderDelete = (orders) => {
    return {
        type: orderActions.FETCHED_ORDERS_DELETE,
        id: orders.id
    }
}

export const fetchedOrderSuccess = (order) => {
    return {
        type: orderActions.FETCHED_ORDERS_SUCCESS,
        orders: order
    }
}

export const fetchedOrdersInit = () => {
    return dispatch => {
        dispatch(fetchedOrderStart())
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = []
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchedOrderSuccess(fetchedOrders))
                dispatch(fetchedOrderDelete(fetchedOrders))
            })
            .catch(err => {
                dispatch(fetchedOrdersFailed(err))
            })
    }

}