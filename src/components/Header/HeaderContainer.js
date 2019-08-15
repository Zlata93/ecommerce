import React from 'react';
import { Query } from 'react-apollo';
import queries from "../../graphql/queries";
import Header from "./Header";

const HeaderContainer = () => {
    return (
        <Query query={queries.GET_CARD_HIDDEN}>
            {
                ({ data: { cartHidden } }) => <Header isHidden={cartHidden} />
            }
        </Query>
    );
};

export default HeaderContainer;
