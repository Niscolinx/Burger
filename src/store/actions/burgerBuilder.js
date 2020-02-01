import * as actionTypes from './actionTypes'
import axios from '../../axios'

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const initIngredients = (ing) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ing
    }
}
export const loadIngFailed = (error) => {
    return {
        type: actionTypes.LOAD_INGREDIENTS_FAILED,
        error: error
    }
}
export const setIngredients = () => {
    return dispatch => {
        axios
            .get("https://my-react-burger-1ce01.firebaseio.com/ingredients.json")
            .then(res => {
                dispatch(initIngredients(res.data))
            })
            .catch(error => {
                dispatch(loadIngFailed(error))
            })
    }
}