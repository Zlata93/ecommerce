import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../providers/cart/cart-provider';
import './CartDropdown.scss';

const CartDropdown = ({ history }) => {
    const { cartItems, toggleHidden } = useContext(CartContext);
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
                    history.push('/checkout');
                    toggleHidden();
                }}>
                Go to checkout
            </Button>
        </div>
    );
};

export default withRouter(CartDropdown);
