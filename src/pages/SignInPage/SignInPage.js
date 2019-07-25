import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInPage.scss';

const SignInPage = ({ isHidden, hideCart }) => {

    useEffect(() => {
        (function() {
            if ("ontouchstart" in document.documentElement) {
                const collectionPage = document.querySelector('.collection-page');
                if (collectionPage) collectionPage.className += " no-hover";
            }

            if (!isHidden) {
                hideCart();
            }
        })()
    }, []);

    return (
        <div className='signin-page'>
            <SignIn />
            <SignUp />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isHidden: selectCartHidden(state)
});

const mapDispatchToProps = (dispatch) => ({
    hideCart: () => dispatch(hideCart())
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
