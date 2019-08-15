import React from 'react';
import { Query } from 'react-apollo';
import CollectionList from "./CollectionList";
import queries from "../../graphql/queries";
import Spinner from "../Spinner/Spinner";

const CollectionListContainer = () => {
    return (
        <Query query={queries.GET_COLLECTIONS}>
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
