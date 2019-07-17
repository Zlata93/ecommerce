import React from 'react';
import './Button.scss';

const Button = ({ children, classname, ...otherProps }) => {
    return (
        <button className={`button ${classname ? classname : ''}`} {...otherProps}>
            {children}
        </button>
    )
};

export default Button;
