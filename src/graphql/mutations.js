import { gql } from "apollo-boost";

const mutations = {
    TOGGLE_CART_HIDDEN: gql`
        mutation ToggleCartHidden {
            toggleCartHidden @client
        }
    `,
    HIDE_CART: gql`
        mutation HideCart {
            hideCart @client
        }
    `,
    ADD_ITEM_TO_CART: gql`
        mutation AddItemToCart($item: Item!) {
            addItemToCart(item: $item) @client
        }
    `
};

export default mutations;
