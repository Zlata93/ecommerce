import React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'redux';
import mutations from "../../graphql/mutations";
import CheckoutItem from "./CheckoutItem";

const CheckoutItemContainer = ({ addItem, removeItem, clearItem, ...otherProps }) => {
    return <CheckoutItem
                addItem={(item) => addItem({ variables: {item} })}
                removeItem={(item) => removeItem({ variables: {item} })}
                clearItem={(item) => clearItem({ variables: {item} })}
                { ...otherProps }
            />
};

export default compose(
    graphql(mutations.ADD_ITEM_TO_CART, { name: 'addItem' }),
    graphql(mutations.REMOVE_ITEM_FROM_CART, { name: 'removeItem' }),
    graphql(mutations.CLEAR_ITEM_FROM_CART, { name: 'clearItem' })
)(CheckoutItemContainer);
