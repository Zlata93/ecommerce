import React from 'react';
import { Mutation, Query } from 'react-apollo';
import queries from "../../graphql/queries";
import mutations from "../../graphql/mutations";
import CartDropdown from "./CartDropdown";

const CartDropdownContainer = () => {
    return (
        <Mutation mutation={mutations.TOGGLE_CART_HIDDEN}>
            {
                (toggleCartHidden) => (
                    <Query query={queries.GET_CART_ITEMS}>
                        {
                            ({ data: { cartItems } }) =>
                                <CartDropdown cartItems={cartItems} toggleHidden={toggleCartHidden} />
                        }
                    </Query>
                )
            }
        </Mutation>
    );
};

export default CartDropdownContainer;
