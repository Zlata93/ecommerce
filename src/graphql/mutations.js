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
    `,
    REMOVE_ITEM_FROM_CART: gql`
        mutation RemoveItemFromCart($item: Item!) {
            removeItemFromCart(item: $item) @client
        }
    `,
    CLEAR_ITEM_FROM_CART: gql`
        mutation ClearItemFromCart($item: Item!) {
            clearItemFromCart(item: $item) @client
        }
    `,
    SET_USER: gql`
        mutation SetUser($user: User!) {
            setUser(user: $user) @client
        }
    `
};

export default mutations;
