import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRouter = ({ component: Component, ...rest }) => {
    return (
        <Route
            render={props =>
                !localStorage.getItem('user') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/dashboard" />
                )
            }
            {...rest}
        />
    );
};
