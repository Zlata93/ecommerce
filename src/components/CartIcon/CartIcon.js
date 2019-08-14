import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/cart-provider';
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './CartIcon.scss';

const CartIcon = () => {
    const { toggleHidden, cartItemsCount } = useContext(CartContext);
    return (
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingIcon className='cart-icon__shopping-icon' />
            <span className='cart-icon__item-count'>{cartItemsCount}</span>
        </div>
    );
};

export default CartIcon;
