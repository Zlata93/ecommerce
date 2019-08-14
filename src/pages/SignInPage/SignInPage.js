import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import useHideCart from "../../hooks/useHideCart";
import './SignInPage.scss';

const SignInPage = () => {
    useHideCart();

    return (
        <div className='signin-page'>
            <SignIn />
            <SignUp />
        </div>
    );
};


export default SignInPage;
