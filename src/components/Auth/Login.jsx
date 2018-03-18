import React, {Component} from 'react';
import Form from '../Basic/Form';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formId: 'loginForm',
            inputs: [
                {
                    name: 'Login',
                    type: 'text',
                    placeholder: 'login',
                    ref: (input) => { this.login = input }
                },
                {
                    name: 'Password',
                    type: 'password',
                    placeholder: 'password',
                    ref: (input) => { this.password = input }
                },
            ],
            buttons: [
                {
                    name: 'login',
                    type: 'button',
                    onClick: this.resolveLoginClick
                },
                {
                    name: 'login with YouTube',
                    type: 'button',
                    className: 'youtube-btn',
                    onClick: this.resolveYoutubeLoginClick
                }
            ]
        };

    }

    render() {
        return (
            <div className="login-page">
                <Form
                    formId={this.state.formId}
                    formInputs={this.state.inputs}
                    formButtons={this.state.buttons}
                />
            </div>
        )
    }

    static resolveLoginClick() {
        console.log(this.login, this.password);
    }

    static resolveYoutubeLoginClick() {
        console.log('YouTube login');
    }
}

export default Login;