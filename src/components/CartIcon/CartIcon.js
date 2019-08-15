import React from 'react';
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='cart-icon__shopping-icon' />
            <span className='cart-icon__item-count'>{itemCount}</span>
        </div>
    );
};

export default CartIcon;
