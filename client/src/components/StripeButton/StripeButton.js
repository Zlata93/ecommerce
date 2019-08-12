import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './StripeButton.scss';

const StripeButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_gYlQm4bay0zc6jgelHQl0ovz00Toqx8oCl';

    const onToken = (token) => {
        axios({
            url: '/payment/',
            method: 'post',
            data: {
                amount: priceInCents,
                token
            }
        }).then(res => {
            console.log('Payment successful');
        }).catch(err => {
            console.log('Payment failed: ', err);
        });
    };

    return (
        <StripeCheckout
            label='Buy now'
            name='ecommerce'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel='Buy now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
