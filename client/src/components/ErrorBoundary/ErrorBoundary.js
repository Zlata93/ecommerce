import React, { Component } from 'react';
import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error: ', error);
    }

    render() {
        const { hasError } = this.state;
        return hasError ? <div className='error'>Sorry, something went wrong... Please try again later</div> : this.props.children;

    }
}

export default ErrorBoundary;
