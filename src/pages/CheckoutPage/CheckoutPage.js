import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';
import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className='checkout'>
            <div className='checkout__header checkout-header'>
                <div className='checkout__header-block'>
                    <span>Product</span>
                </div>
                <div className='checkout__header-block'>
                    <span>Description</span>
                </div>
                <div className='checkout__header-block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout__header-block'>
                    <span>Price</span>
                </div>
                <div className='checkout__header-block'>
                    <span>Remove</span>
                </div>
            </div>
            <div>
                cat
            </div>
            <div className='checkout__total'>Total: ${total}</div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
