import { userConstants } from '../constants';
const initialState = {
    loading: false,
    message: '',
    user: JSON.parse(localStorage.getItem('user')),
    error: false,
};
export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                message: action.message,
                user: action.data,
                loading: false,
                error: false,
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                message: action.error,
                error: true,
                loading: false,
            };
        case userConstants.LOGOUT:
            return {
                ...state,
                loading: true,
            };
        case userConstants.LOGOUT_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
            };
        case userConstants.REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.message,
                error: false,
            };
        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                message: action.error,
                error: true,
            };
        default:
            return state;
    }
};
