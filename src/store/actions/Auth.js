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
        error
    }
}

export const initAuth = (email, password, isLogin) => {
    
    return dispatch => {
        dispatch(authStart())
       
        let url = fire.auth().signInWithEmailAndPassword(email,password)
        if(!isLogin){
            url = fire.auth().createUserWithEmailAndPassword(email, password)
        }
        url.then(res => {
                console.log(res.data, 'success')
                dispatch(authSuccess(res.data))
            })
            .catch(err => {
                dispatch(authFailed(err.message))
            })
    }
}