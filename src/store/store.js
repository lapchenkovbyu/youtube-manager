import {createStore} from 'redux';
import {reducers} from './reducers';

export const store = createStore(reducers.loginSuccess
    // ,window.__REDUX_DEVTOOLS_EXTENSION__
    // && window.__REDUX_DEVTOOLS_EXTENSION__()
);
