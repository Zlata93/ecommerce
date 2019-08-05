import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './SignUp.scss';

const SignUp = ({ signUpStart }) => {
    const [signUpData, setSignUpData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = signUpData;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        signUpStart({ email, password, displayName });
    };

    const handleChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

    return (
        <div className='signup'>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit} className='signup__form'>
                <Input name='displayName' value={displayName} type='text' required handleChange={handleChange} label='Display Name'/>
                <Input name='email' value={email} type='email' required handleChange={handleChange} label='Email'/>

                <Input name='password' value={password} type='password' required handleChange={handleChange} label='Password'/>
                <Input name='confirmPassword' value={confirmPassword} type='password' required handleChange={handleChange} label='Confirm Password'/>

                <Button type='submit'>Sign up</Button>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userData) => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);
