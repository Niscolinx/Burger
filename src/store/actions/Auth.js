import * as actions from './actionTypes'

export const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}

export const authSuccess = (auth) => {
    return {
        type: actions.AUTH_SUCCESS,
        payload: auth
    }
}

export const authFailed = (error) => {
    return {
        type: actions.AUTH_FAILED,
        error: error
    }
}

export const initAuth = (email, password) => {
    return dispatch => {
        dispatch(authStart())
    }
}