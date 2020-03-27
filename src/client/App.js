import React from 'react';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { PublicRouter } from './router/PublicRouter';
import { PrivateRouter } from './router/PrivateRouter';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import { history } from './utils/history';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <PublicRouter exact path="/" component={Homepage} />
                <PublicRouter exact path="/login" component={Login} />
                <PublicRouter exact path="/register" component={Register} />
                <PrivateRouter exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
};

export default App;
