import * as actions from './actionTypes'
import fire from '../../firebase/firebase'


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
    
    return dispatch => {
        dispatch(authStart())
        // let url = 'https://dentitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkxoSmDMAvGH5Uyd2XQuk6ghxHOTjhSB4'
        // if (!isLogin) {
        //     url = 'https://cors-anywhere.herokuapp.com/https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkxoSmDMAvGH5Uyd2XQuk6ghxHOTjhSB4'
        // }
        let url = fire.auth().signInWithEmailAndPassword(email,password)
        if(!isLogin){
            url = fire.auth().createUserWithEmailAndPassword(email, password)
        }
        url.then(res => {
                console.log(res.data, 'success')
                dispatch(authSuccess(res.data))
            })
            .catch(err => {
                console.log(err, 'failure')
                dispatch(authFailed(err))
            })
    }
}