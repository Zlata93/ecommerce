import React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'redux';
import CollectionList from "./CollectionList";
import queries from "../../graphql/queries";
import mutations from "../../graphql/mutations";
import Spinner from "../Spinner/Spinner";

const CollectionListContainer = ({ cartData: { cartHidden }, collectionsData: { collections, loading }, hideCart }) => {
    return (
        loading ? <Spinner/>
        : <CollectionList collections={collections} isHidde={cartHidden} hideCart={hideCart} />
    );
};

export default compose(
    graphql(queries.GET_CARD_HIDDEN, { name: 'cartData' }),
    graphql(queries.GET_COLLECTIONS, { name: 'collectionsData' }),
    graphql(mutations.HIDE_CART, { name: 'hideCart' })
)(CollectionListContainer);
