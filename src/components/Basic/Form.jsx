import React, {Component} from 'react';
import Input from '../Basic/Input';
import Button from '../Basic/Button';
import '../../assets/css/Basic/Form.css';

class Form extends Component {

    render() {
        return (
            <div className="form">
                <form className="login-form">
                    {this.props.formInputs.map((input, i) => {
                        return <Input key={this.props.formID+"-input-"+i} params={input}/>
                    })}
                    {this.props.formButtons.map((button,i) => {
                        return <Button key={this.props.formID+"-button-"+i} params={button}/>
                    })}
                </form>
            </div>
        )
    }
}

export default Form;