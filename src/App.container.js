import React from 'react';
import { Mutation, Query } from 'react-apollo';
import queries from "./graphql/queries";
import mutations from "./graphql/mutations";
import App from './App';

const AppContainer = () => {
    return (
        <Query query={queries.GET_USER}>
            {
                ({ data: { user } }) => (
                    <Mutation mutation={mutations.SET_USER}>
                        {
                            (setUser) =>
                                <App user={user} setUser={(user) => setUser({ variables: { user } })} />
                        }
                    </Mutation>
                )
            }
        </Query>
    );
};

export default AppContainer;
