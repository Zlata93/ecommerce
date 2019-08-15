import React from 'react';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInPage.scss';
import useHideCart from "../../hooks/useHideCart";

const SignInPage = ({ isHidden, hideCart }) => {

    useHideCart(isHidden, hideCart);

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
