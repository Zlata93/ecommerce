import React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'redux';
import queries from "../../graphql/queries";
import mutations from "../../graphql/mutations";
import HomePage from "./HomePage";

const HomePageContainer = ({ cartData: { cartHidden }, hideCart }) => {
    return <HomePage isHidden={cartHidden} hideCart={hideCart} />;
};

export default compose(
    graphql(queries.GET_CARD_HIDDEN, { name: 'cartData' }),
    graphql(mutations.HIDE_CART, { name: 'hideCart' })
)(HomePageContainer);
