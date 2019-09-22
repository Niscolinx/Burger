import * as actions from './actionTypes'
import axios from 'axios'

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

export const initAuth = (email, password, isLogin) => {
    const info = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    return dispatch => {
        dispatch(authStart())
        // let url = 'https://dentitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkxoSmDMAvGH5Uyd2XQuk6ghxHOTjhSB4'
        // if (!isLogin) {
        //     url = 'https://cors-anywhere.herokuapp.com/https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkxoSmDMAvGH5Uyd2XQuk6ghxHOTjhSB4'
        // }
        let url = 
        console.log(url)
        axios.post(url, info)
            .then(res => {
                console.log(res)
                dispatch(authSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(authFailed(err))
            })
    }
}