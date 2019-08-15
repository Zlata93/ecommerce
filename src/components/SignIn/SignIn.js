import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import './SignIn.scss';

const SignIn = () => {
    const [signInData, setSignInData] = useState({
        name: '',
        password: ''
    });

    const { email, password } = signInData;

    const handleChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSignInData({
                email: '',
                password: ''
            });
        } catch(err) {
            console.log('Error signing in: ', err);
        }
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
                    <Button onClick={signInWithGoogle} type='google-signin'>Sign in with Google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
