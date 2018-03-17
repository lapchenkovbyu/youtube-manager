import React from 'react';

function Input(props) {
    return(
        <div>
            <label>{props.params.name}</label>
            <input type={props.params.type} placeholder={props.params.placeholder}/>
        </div>
    )
}

export default Input;