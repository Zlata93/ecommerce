import React, {Component} from 'react';
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './CartIcon.scss';

const CartIcon = () => {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='cart-icon__shopping-icon' />
            <span className='cart-icon__item-count'> 0 </span>
        </div>
    );
};

export default CartIcon;
