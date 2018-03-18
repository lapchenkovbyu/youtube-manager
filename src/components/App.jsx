import React, {Component} from 'react';
import '../assets/css/App.css';
import Login from "./Auth/Login";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {store} from "../store/store";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Router>
                        <Route path="/">
                            <Route path="/login" component={Login}/>
                            {/*<Redirect from="/" to="/login"/>*/}
                        </Route>
                    </Router>
                </Provider>
            </div>

        );
    }
}

export default App;
