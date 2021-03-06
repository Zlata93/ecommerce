import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart-actions';
import './CheckoutItem.scss';

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <div className='checkout-item'>
            <div className='checkout-item__image-container'>
                <img src={imageUrl} className='checkout-item__image' alt='cart-item' />
            </div>
            <span className='checkout-item__name'>{name}</span>
            <span className='checkout-item__quantity'>
                <div className='checkout-item__arrow' onClick={() => removeItem(item)}>&#10094;</div>
                <span className='checkout-item__quantity-value'>{quantity}</span>
                <div className='checkout-item__arrow' onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className='checkout-item__price'>{price}</span>
            <span className='checkout-item__remove-button' onClick={() => clearItem(item)}>&#10005;</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
