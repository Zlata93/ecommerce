import React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'redux';
import queries from "../../graphql/queries";
import CheckoutPage from "./CheckoutPage";

const CheckoutPageContainer = ({ itemsData: { cartItems }, totalData: { total } }) => {
    return  <CheckoutPage cartItems={cartItems} total={total} />
};

export default compose(
    graphql(queries.GET_CART_ITEMS, { name: 'itemsData' }),
    graphql(queries.GET_TOTAL, { name: 'totalData' })
)(CheckoutPageContainer);
