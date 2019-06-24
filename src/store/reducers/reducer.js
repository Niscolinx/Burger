import * as actionTypes from '../actions'

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0,
    },
    totalPrice: 4,
    purchasable: false
}

const INGREDIENT_PRICES = {
    salad: 0.8,
    bacon: 1.7,
    cheese: 2.3,
    meat: 1
};

// const orderBtn = (state) => {

//     const orderIng = Object.values(state).reduce((orderIng, el) => {
//         return orderIng + el;
//     }, 0);

//     return orderIng > 0
// }
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            console.log('purchase',!state.purchasable)
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],

            }

        default:
            return state;
    }
}

export default reducer