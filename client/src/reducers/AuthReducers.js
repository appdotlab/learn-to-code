import { LOG_IN, LOG_OUT } from '../actions/types'

// Convert this to a middleware

const INIT_STATE = {
    isLoggedIn: false,
    user: {}
}

export const AuthReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }
        case LOG_OUT:
            return {...state, isLoggedIn: false}
        default:
            return state
    }
}