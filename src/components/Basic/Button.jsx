import React from 'react';

function Button(props) {
    return <button type={props.params.type} onClick={props.params.onClick}>{props.params.name}</button>
}

export default Button;