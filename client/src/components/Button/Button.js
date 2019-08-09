import React from 'react';
import './Button.scss';

const Button = ({ children, classname, mod, ...otherProps }) => {
    return (
        <button
            className={`button ${classname ? classname : ''} ${mod ? `button_${mod}` : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    )
};

export default Button;
