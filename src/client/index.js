import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { authentication } from './reducer/auth.reducer';
import { labs } from './reducer/lab.reducer';
import { map } from './reducer/map.reducer';

const appReducer = combineReducers({ authentication, labs, map });
const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
