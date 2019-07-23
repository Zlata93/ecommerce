import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-dropdown__items'>
                {
                    cartItems.length > 0 ?
                    cartItems.map(item => <CartItem key={item.id} item={item}/>) :
                    <span className='cart-dropdown__message'>Your cart is empty</span>
                }
            </div>
            <Button classname='cart-dropdown__button'>Go to checkout</Button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
