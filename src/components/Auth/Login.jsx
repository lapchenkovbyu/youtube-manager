import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginAttemptYouTube} from '../../actions/auth';
import {url, googleAPIParams} from "../../misc/variables";

class Login extends Component {
    render(){
        console.log(this.props.authState);
        return(
            <div className="form">
                <button
                    className="youtube-btn"
                    onClick={this.props.onFireYouTubeLogin}
                >Login with YouTube</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        authState:state.auth
    }),
    dispatch => ({
        onFireYouTubeLogin: () => {
            dispatch(loginAttemptYouTube());
            let queryString = "?";
            Object.keys(googleAPIParams).forEach(function (key, index) {
                if (index!==0){
                    queryString+="&"
                }
                queryString+=key+'='+googleAPIParams[key];
            });
            window.location.replace(url+queryString);
        }
    })
)(Login);