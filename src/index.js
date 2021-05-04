import React from 'react';
import App from './App';
import './css/index.scss';
import { render } from 'react-dom';
import {Provider, ReactReduxContext} from "react-redux";
import {ConnectedRouter} from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history, store } from './store';

render(
    <Provider store={store} context={ReactReduxContext}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="*" render={(props) => <App {...props} />} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
