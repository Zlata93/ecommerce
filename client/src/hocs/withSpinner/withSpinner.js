import React from 'react';
import './withSpinner.scss';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className='spinner-overlay'>
            <div className='spinner'/>
        </div>
    ) : (
        <WrappedComponent {...otherProps} />
    )
};

export default WithSpinner;
