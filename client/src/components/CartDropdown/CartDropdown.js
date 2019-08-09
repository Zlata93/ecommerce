import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, toggleHidden }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-dropdown__items'>
                {
                    cartItems.length > 0 ?
                    cartItems.map(item => <CartItem key={item.id} item={item}/>) :
                    <span className='cart-dropdown__message'>Your cart is empty</span>
                }
            </div>
            <Button
                classname='cart-dropdown__button'
                onClick={() => {
                    history.push('/checkout')
                    toggleHidden();
                }}>
                Go to checkout
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

const mapDispatchToProps = (dispatch) => ({
    toggleHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
