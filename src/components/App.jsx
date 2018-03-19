import React, {Component} from 'react';
import '../assets/css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers'

import Login from './Auth/Login'
import Authorize from './Auth/Authorize'
import Dashboard from './User/Dashboard'

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
// const store = createStore(reducers);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Router>
                        <div>
                            <Route exact={true} path="/" component={Login}/>
                            <Route exact={true} path="/oauth2/login" component={Authorize}/>
                            <Route exact={true} path="/dashboard" component={Dashboard}/>
                        </div>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
