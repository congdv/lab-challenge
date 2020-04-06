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
                data: { username: user.username, name: user.name },
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

const register = (username, name, password) => {
    return async dispatch => {
        dispatch({ type: userConstants.REGISTER_REQUEST });
        try {
            await userService.register(username, name, password);
            dispatch({
                type: userConstants.REGISTER_SUCCESS,
                message: 'Successfully register',
            });
            history.push('/login');
        } catch (error) {
            dispatch({
                type: userConstants.REGISTER_FAILURE,
                error: error,
            });
            console.log(error);
        }
    };
};

export default {
    login,
    register,
};
