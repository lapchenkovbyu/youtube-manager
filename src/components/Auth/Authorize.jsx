import React, {Component} from 'react';
import {loginSucceed} from "../../actions/auth";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Authorize extends Component {
    render() {
        console.log(window.location.hash);
        let hash = window.location.hash.substring(1);
        let params = {};
        hash.split('&').forEach(function(hk) {
            let temp = hk.split('=');
            params[temp[0]] = temp[1];
        });
        console.log(params);
        this.props.authSucesfull(params);
        return (
            <div>
                <p>Logging in...</p>
            </div>
        );
    }
    componentDidMount() {
        this.props.history.push("/dashboard");
    }
}

export default connect(
    state => ({
        authState: state.auth
    }),
    dispatch => ({
        authSucesfull: (payload) => {
            dispatch(loginSucceed(payload));
        }
    })
)(withRouter(Authorize));