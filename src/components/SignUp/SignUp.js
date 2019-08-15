import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import './SignUp.scss';

const SignUp = () => {
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

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            setSignUpData({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.log('Error creating user with sign up: ', err);
        }
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

export default SignUp;
