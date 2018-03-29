import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

import 'bootstrap/dist/css/bootstrap.css';
// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();


/**
 * Provider - Makes the Redux store available to the connect() calls in the component hierarchy below.
 */
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);