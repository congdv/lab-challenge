import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, ...rest }) => {
    return (
        <Route
            render={props =>
                localStorage.getItem('user') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
            {...rest}
        />
    );
};
