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
                    placeholder: 'login'
                },
                {
                    name: 'Password',
                    type: 'password',
                    placeholder: 'password'
                },
            ],
            buttons: [
                {
                    name: 'login',
                    type: 'button',
                    onClick: this.resolveBtnClick
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

    static resolveBtnClick() {
        console.log('success!!!!!11');
    }
}

export default Login;