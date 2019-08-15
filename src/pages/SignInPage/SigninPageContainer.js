import React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'redux';
import queries from "../../graphql/queries";
import mutations from "../../graphql/mutations";
import SignInPage from "./SignInPage";

const SignInPageContainer = ({ cartData: { cartHidden }, hideCart }) => {
    return <SignInPage isHidden={cartHidden} hideCart={hideCart} />;
};

export default compose(
    graphql(queries.GET_CARD_HIDDEN, { name: 'cartData' }),
    graphql(mutations.HIDE_CART, { name: 'hideCart' })
)(SignInPageContainer);
