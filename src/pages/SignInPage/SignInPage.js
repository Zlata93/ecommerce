import React, { useContext, useEffect } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import { CartContext } from '../../providers/cart/cart-provider';
import './SignInPage.scss';

const SignInPage = () => {
    const { isHidden, hideCart } = useContext(CartContext);

    useEffect(() => {
        (function() {
            if ("ontouchstart" in document.documentElement) {
                const collectionPage = document.querySelector('.collection-page');
                if (collectionPage) collectionPage.className += " no-hover";
            }

            if (!isHidden) {
                hideCart();
            }

            window.scrollTo(0,0);
        })()
    }, []);

    return (
        <div className='signin-page'>
            <SignIn />
            <SignUp />
        </div>
    );
};


export default SignInPage;
