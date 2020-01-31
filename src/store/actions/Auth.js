import * as actions from './actionTypes'
import fire from '../../firebase/firebase'


export const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}

export const authSuccessCheck = (auth) => {

    let token = localStorage.setItem('token', auth)
    console.log(token, auth)

    return dispatch => {
        let user = fire.auth().currentUser;
        let token = user.getIdToken()
        token.then((res) => {
               dispatch(authSuccess(auth, res))
            })
            .catch((err) => {
                dispatch(authFailed(err))
            })

    }
}

export const authSuccess = (auth,res) => {
    return {
        type: actions.AUTH_SUCCESS,
        userId: auth,
        tokenId: res
    }
}

export const authFailed = (error) => {
    return {
        type: actions.AUTH_FAILED,
        error
    }
}

export const logOut = () => {
    localStorage.removeItem('token')

    return {
        type: actions.AUTH_LOGOUT
    }
}

export const initAuth = (email, password, isLogin) => {

    return dispatch => {
        dispatch(authStart())

        let url = fire.auth().signInWithEmailAndPassword(email, password)
        if (!isLogin) {
            url = fire.auth().createUserWithEmailAndPassword(email, password)
        }
        url.then(res => {
            dispatch(authSuccessCheck(res.user.uid))
        })
            .catch(err => {
                dispatch(authFailed(err.message))
            })
    }
}