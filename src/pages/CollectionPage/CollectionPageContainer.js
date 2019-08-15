import React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'redux';
import queries from "../../graphql/queries";
import mutations from "../../graphql/mutations";
import CollectionPage from "./CollectionPage";
import Spinner from "../../components/Spinner/Spinner";

const CollectionPageContainer = ({ collectionData: { loading, getCollectionsByTitle }, cartData: { cartHidden }, hideCart }) => {
    return loading ? <Spinner />
            : <CollectionPage collection={getCollectionsByTitle} isHidden={cartHidden} hideCart={hideCart} />;
};

export default compose(
    graphql(queries.GET_COLLECTION_BY_TITLE, {
        options: ({ match }) => ({ variables: { title: match.params.collectionId }}),
        name: 'collectionData'
    }),
    graphql(queries.GET_CARD_HIDDEN, { name: 'cartData' }),
    graphql(mutations.HIDE_CART, { name: 'hideCart' })
)(CollectionPageContainer);
