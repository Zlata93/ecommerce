import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Header from "./Header";

const GET_CARD_HIDDEN = gql`
    {
        cartHidden @client
    }
`;


const HeaderContainer = () => {
    return (
        <Query query={GET_CARD_HIDDEN}>
            {
                ({ data: { cartHidden } }) => <Header isHidden={cartHidden} />
            }
        </Query>
    );
};

export default HeaderContainer;
