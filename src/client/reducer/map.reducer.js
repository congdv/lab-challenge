import { mapConstants } from '../constants';
const initialState = {
    loading: true,
    message: '',
    viewport: { latitude: 31.332154, longitude: 121.524731, zoom: 8 },
    error: '',
};
export const map = (state = initialState, action) => {
    switch (action.type) {
        case mapConstants.LOCATING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case mapConstants.LOCATING_SUCCESS:
            return {
                ...state,
                message: action.message,
                loading: false,
                viewport: { ...action.data },
            };
        case mapConstants.LOCATING_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
