import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './misc/registerServiceWorker';
// import {BrowserRouter as Router, Link, Route} from "react-router-dom";
// import {Provider} from 'react-redux';
// import {store} from './store/store';


ReactDOM.render(
        <App />
    , document.getElementById('root'));
registerServiceWorker();
