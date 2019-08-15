import React from 'react';
import './CheckoutPage.scss';
import { default as CheckoutItem } from "../../components/CheckoutItem/CheckoutItemContainer";
import StripeButton from '../../components/StripeButton/StripeButton';

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
            <div className='checkout__body'>
                {
                    cartItems.map(item => <CheckoutItem item={item} key={item.id} />)
                }
            </div>
            <div className='checkout__total'>Total: ${total}</div>
            <StripeButton price={total} />
            <div className='checkout__test-warning'>
                * Please use the following test credit card for payment:
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
        </div>
    );
};

export default CheckoutPage;
