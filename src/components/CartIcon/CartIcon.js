import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
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

const mapStateToProps = ({ cart }) => ({
    itemCount: cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
