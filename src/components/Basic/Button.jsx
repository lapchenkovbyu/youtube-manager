import React from 'react';

function Button(props) {
    return(
    <div className="margin15">
        <button
            type={props.params.type}
            className={props.params.className}
            onClick={props.params.onClick}
            ref={props.params.ref}>
            {props.params.name}</button>
    </div>
    );
}

export default Button;