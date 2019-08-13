import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import CartContext from "../../contexts/cart/cart-context";
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './CartIcon.scss';

const CartIcon = ({ itemCount }) => {
    const { toggleHidden } = useContext(CartContext);
    return (
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingIcon className='cart-icon__shopping-icon' />
            <span className='cart-icon__item-count'>{itemCount}</span>
        </div>
    );
};

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartIcon);
