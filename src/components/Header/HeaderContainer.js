import React from 'react';
import { Query } from 'react-apollo';
import queries from "../../graphql/queries";
import Header from "./Header";

const HeaderContainer = () => {
    return (
        <Query query={queries.GET_CLIENT_PROPERTIES}>
            {
                ({ data: { cartHidden, user } }) => <Header isHidden={cartHidden} user={user} />
            }
        </Query>
    );
};

export default HeaderContainer;
