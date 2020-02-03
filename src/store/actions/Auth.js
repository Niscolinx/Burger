import * as actions from './actionTypes'
import fire from '../../firebase/firebase'


export const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}

export const authSuccessCheck = (auth) => {    
    return dispatch => {

       // let database = fire.database('https://my-react-burger-1ce01.firebaseio.com');
        //console.log(database)
    // var userId = fire.auth().currentUser.uid;
   
    // return fire.database().ref('orders/-LzxnBJVUgxe9OV9wlXL').once('value').then(function (snapshot) {
    //     var username = (snapshot.val().contactform.name) || 'Anonymous';
    //         console.log(username)
            
    //   });
        let user = fire.auth().currentUser;
        let token = user.getIdToken()
        token.then((res) => {
             localStorage.setItem('userId', auth)
             localStorage.setItem('token', res)
               dispatch(authSuccess(auth, res))

               setTimeout(() => {
                   dispatch(logOut())
               }, 3600 * 1000);
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
    localStorage.removeItem('userId')

    return {
        type: actions.AUTH_LOGOUT
    }
}


export const clearError = () => {

    return{
        type: actions.AUTH_CLEAR_ERROR
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