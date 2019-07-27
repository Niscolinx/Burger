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