import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-dropdown__items'>
                {
                    cartItems.map(item => <CartItem key={item.id} item={item}/>)
                }
            </div>
            <Button classname='cart-dropdown__button'>Go to checkout</Button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
