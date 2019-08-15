import React from 'react';
import { Mutation, Query } from 'react-apollo';
import queries from "../../graphql/queries";
import mutations from "../../graphql/mutations";
import CartIcon from "./CartIcon";

const CartIconContainer = () => {
    return (
        <Query query={queries.GET_ITEM_COUNT}>
            {
                ({ data: { itemCount } }) => (
                    <Mutation mutation={mutations.TOGGLE_CART_HIDDEN}>
                        {
                            (toggleCartHidden) =>
                                <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
                        }
                    </Mutation>
                )
            }
        </Query>
    );

};

export default CartIconContainer;
