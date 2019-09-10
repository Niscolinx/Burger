import * as actionTypes from '../actions/actionTypes'
import update from '../utility'

const initialState = {
    error: null,
    loading: false,
    tokenId: null,
    userId: null
}

const authState = (state, action) => {
    return update(state, {
        loading: true
    })
}

const authSuccess = (state, action) => {
    return update(state, {
        ...action,
        loading: false,
        tokenId: action.tokenId,
        userId: action.userId
    })
}

const authFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: action.error
    })
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authState(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAILED: return authFailed(state, action);
        default: return state

    }
}

export default auth
