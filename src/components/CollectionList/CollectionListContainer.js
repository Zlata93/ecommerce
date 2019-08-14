import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import CollectionList from "./CollectionList";
import Spinner from "../Spinner/Spinner";

const GET_COLLECTIONS = gql`
    {
        collections {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionListContainer = () => {
    return (
        <Query query={GET_COLLECTIONS}>
            {
                ({ loading, error, data }) => {
                    if (loading) {
                        return <Spinner />
                    }
                    return <CollectionList collections={data.collections} />
                }
            }
        </Query>
    );
};

export default CollectionListContainer
