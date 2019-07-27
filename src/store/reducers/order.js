import * as orderActions from '../actions/actionTypes'

const initialState = {
    order: [],
    loading: false,
    purchased: false
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case orderActions.BURGER_ORDER_START:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                order: state.order.concat(newOrder),
                purchased: true
            }
        case orderActions.BURGER_ORDER_FAILED:
            return {
                ...state,
                loading: false,

            }
        case orderActions.BURGER_ORDER_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case orderActions.ORDER_REDIRECT:
            return {
                ...state,
                purchased: false
            }

        default:
            return state
    }
}

export default orderReducer