import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { googleSigninStart, emailSigninStart } from '../../redux/user/user-actions';
import './SignIn.scss';

const SignIn = ({ emailSigninStart, googleSigninStart }) => {

    const [userLoginData, setUserLoginData] = useState({ email: '', password: '' });
    const { email, password } = userLoginData;

    const handleChange = (e) => {
        setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        emailSigninStart(email, password);
    };

    return (
        <div className='signin'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <Input name='email' value={email} type='email' required handleChange={handleChange} label='Email'/>

                <Input name='password' value={password} type='password' required handleChange={handleChange} label='Password'/>

                <div className='signin__buttons'>
                    <Button type='submit' classname='mr-10'>Sign in</Button>
                    <Button onClick={googleSigninStart} mod='google-signin' type='button'>
                        Sign in with Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) => dispatch(emailSigninStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
