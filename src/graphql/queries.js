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
    GET_TOTAL: gql`
        {
            total @client
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
    `,
    GET_COLLECTION_BY_TITLE: gql`
        query getCollectionsByTitle($title: String!) {
            getCollectionsByTitle(title: $title) {
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
    `,
    GET_CLIENT_PROPERTIES: gql`
        {
            cartHidden @client
            user @client
        }
    `,
    GET_USER: gql`
        {
            user @client
        }
    `
};

export default queries;
