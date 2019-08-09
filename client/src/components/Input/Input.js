import React from 'react';
import './Input.scss';

const Input = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='input-group'>
            <input className='input' onChange={handleChange} {...otherProps} />
            {
                label &&
                <label className={`input__label ${otherProps.value && otherProps.value.length ? 'input__label_shrink' : ''}`}>
                    {label}
                </label>
            }
        </div>
    );
};

export default Input;
