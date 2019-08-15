import React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'redux';
import queries from "../../graphql/queries";
import mutations from "../../graphql/mutations";
import CartIcon from "./CartIcon";

const CartIconContainer = ({ data: { itemCount }, toggleCartHidden }) => {
    return <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
};

export default compose(
    graphql(queries.GET_ITEM_COUNT),
    graphql(mutations.TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' })
)(CartIconContainer);
