import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import useHideCart from "../../hooks/useHideCart";
import './SignInPage.scss';

const SignInPage = ({ isHidden, hideCart }) => {

    useHideCart(isHidden, hideCart);

    return (
        <div className='signin-page'>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInPage;
