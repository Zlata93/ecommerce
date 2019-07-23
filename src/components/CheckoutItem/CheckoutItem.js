import React from 'react';
import { connect } from 'react-redux';
import { clearItem } from '../../redux/cart/cart-actions';
import './CheckoutItem.scss';

const CheckoutItem = ({ item, clearItem }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <div className='checkout-item'>
            <div className='checkout-item__image-container'>
                <img src={imageUrl} className='checkout-item__image' alt='cart-item' />
            </div>
            <span className='checkout-item__name'>{name}</span>
            <span className='checkout-item__quantity'>{quantity}</span>
            <span className='checkout-item__price'>{price}</span>
            <span className='checkout-item__remove-button' onClick={() => clearItem(item)}>&#10005;</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
