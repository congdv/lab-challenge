import { labService } from '../service';
import { labConstants } from '../constants';

const getAll = () => {
    return async dispatch => {
        dispatch({ type: labConstants.GET_ALL_REQUEST });
        try {
            const labs = await labService.getAll();
            dispatch({
                type: labConstants.GET_ALL_SUCCESS,
                data: labs,
                message: 'Successfully get all labs',
            });
        } catch (error) {
            console.log(error);
            dispatch({ type: labConstants.GET_ALL_FAILURE });
        }
    };
};

export default {
    getAll,
};
