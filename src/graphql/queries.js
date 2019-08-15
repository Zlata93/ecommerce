import { gql } from "apollo-boost";

const queries = {
    GET_CARD_HIDDEN: gql`
        {
            cartHidden @client
        }
    `,
    GET_CART_ITEMS: gql`
        {
            cartItems @client
        }
    `,
    GET_ITEM_COUNT: gql`
        {
            itemCount @client
        }
    `,
    GET_COLLECTIONS: gql`
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
    `
};

export default queries;
