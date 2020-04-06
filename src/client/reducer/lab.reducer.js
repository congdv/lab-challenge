import { labConstants } from '../constants';
const initialState = {
    loading: true,
    message: '',
    data: [],
    error: '',
};
export const labs = (state = initialState, action) => {
    switch (action.type) {
        case labConstants.GET_ALL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case labConstants.GET_ALL_SUCCESS:
            return {
                ...state,
                message: action.message,
                loading: false,
                data: action.data,
            };
        case labConstants.GET_ALL_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
