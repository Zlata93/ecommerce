import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInPage.scss';

const SignInPage = () => {
    return (
        <div className='signin-page'>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInPage;
