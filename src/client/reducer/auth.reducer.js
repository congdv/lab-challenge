import { userConstants } from '../constants';
const initialState = {
    loading: true,
    message: '',
    error: '',
};
export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                message: action.message,
                loading: false,
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case userConstants.LOGOUT:
            return {
                ...state,
                loading: true,
            };
        case userConstants.LOGOUT_FAILURE:
            return {
                ...state,
                error: '',
                loading: false,
            };
        default:
            return state;
    }
};
