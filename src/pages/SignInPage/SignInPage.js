import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import { onPageNav } from '../../utils/helpers';
import './SignInPage.scss';

const SignInPage = ({ isHidden, hideCart }) => {

    useEffect(() => {
        onPageNav(isHidden, hideCart);
    }, [hideCart]);

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
