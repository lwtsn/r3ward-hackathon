import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootSaga from './rdx/sagas';
import createRootReducer from './rdx/reducers';
import createSagaMiddleware from 'redux-saga'
import App from "./App";
import {ConnectedRouter, routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'

import {BrowserRouter as Router} from 'react-router-dom'

const history = createBrowserHistory();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware()

// create a redux store with our reducer above and middleware
let sagaStore = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        ),
        reduxDevTools
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={sagaStore}>
        <ConnectedRouter history={history}>
            <Router>
                <App/>
            </Router>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react-div')
);
