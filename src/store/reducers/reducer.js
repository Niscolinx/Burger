import * as actionTypes from '../actions'

const initialState = {
    ingredients: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients + 1
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients - 1
            }
    
        default:
            return state;
    }
}

export default reducer