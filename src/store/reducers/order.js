import * as orderActions from '../actions/actionTypes'

const initialState = {
    order: [],
    loading: false,
    purchased: false,
    error: false
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case orderActions.BURGER_ORDER_START:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            console.log(newOrder.id)
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
        case orderActions.FETCHED_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case orderActions.FETCHED_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.orders.reverse()
            }
        case orderActions.FETCHED_ORDERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case orderActions.FETCHED_ORDERS_DELETE:
            const orders = [...state.order]
            const updateOrders = orders.filter(order => order.id !== action.id)
            return {
                ...state,
                order: updateOrders
            }
        case orderActions.DELELTE_ALL_ORDERS:
            return {
                ...state,
                order: []
            }

        default:
            return state
    }
}

export default orderReducer