import React, { useContext } from 'react';
import './CheckoutPage.scss';
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from '../../components/StripeButton/StripeButton';
import { CartContext } from '../../providers/cart/cart-provider';

const CheckoutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

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
            <div className='checkout__total'>Total: ${cartTotal}</div>
            <StripeButton price={cartTotal} />
            <div className='checkout__test-warning'>
                * Please use the following test credit card for payment:
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
        </div>
    );
};

export default CheckoutPage;
