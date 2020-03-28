import React, { Fragment } from 'react';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { PublicRouter } from './router/PublicRouter';
import { PrivateRouter } from './router/PrivateRouter';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import { history } from './utils/history';
import Login from './pages/Login';
import Register from './pages/Register';
import BaseStyles from './components/BaseStyles';

const App = () => {
    return (
        <Fragment>
            <BaseStyles />
            <Router history={history}>
                <Switch>
                    <PublicRouter exact path="/" component={Homepage} />
                    <PublicRouter exact path="/login" component={Login} />
                    <PublicRouter exact path="/register" component={Register} />
                    <PrivateRouter
                        exact
                        path="/dashboard"
                        component={Dashboard}
                    />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
