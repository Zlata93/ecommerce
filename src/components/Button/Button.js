import React from 'react';
import './Button.scss';

const Button = ({ children, classname, type, ...otherProps }) => {
    return (
        <button className={`button ${classname ? classname : ''} ${type ? `button_${type}` : ''}`} {...otherProps}>
            {children}
        </button>
    )
};

export default Button;
