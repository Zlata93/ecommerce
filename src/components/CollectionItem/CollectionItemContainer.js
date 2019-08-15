import React from 'react';
import { Mutation } from 'react-apollo';
import mutations from "../../graphql/mutations";
import CollectionItem from "./CollectionItem";

const CollectionItemContainer = (props) => {
    return (
        <Mutation mutation={mutations.ADD_ITEM_TO_CART}>
            {
                (addItemToCart) => <CollectionItem {...props} addItem={(item) => addItemToCart({ variables: {item} })} />
            }
        </Mutation>
    );
};

export default CollectionItemContainer;
