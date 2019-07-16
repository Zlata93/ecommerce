import React, {Component} from 'react';
import Input from '../Input/Input';
import './SignIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Input name='email' value={email} type='email' required handleChange={this.handleChange} label='email'/>
                    <label>Email</label>

                    <Input name='password' value={password} type='password' required handleChange={this.handleChange} label='password'/>
                    <label>Password</label>

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        );
    }
}

export default SignIn;
