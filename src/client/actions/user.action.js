import { history } from '../utils';
import userService from '../service/user.service';
import { userConstants } from '../constants';

const login = (username, password) => {
    return async dispatch => {
        dispatch({ type: userConstants.LOGIN_REQUEST });
        try {
            const user = await userService.login(username, password);
            window.localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: userConstants.LOGIN_SUCCESS,
                message: 'Successfully login',
            });
            history.push('/');
        } catch (error) {
            dispatch({
                type: userConstants.LOGIN_FAILURE,
                error: error,
            });
            console.log(error);
        }
    };
};

export default {
    login,
};
