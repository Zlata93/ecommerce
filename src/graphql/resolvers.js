import { gql } from 'apollo-boost';
import { addItemToCart, getItemCount, removeItemFromCart, clearItemFromCart, getTotal } from './cart-utils';
import queries from "./queries";

export const typeDefs = gql`
    extend type Item {
        quantity: Int
    }
    
    extend type DateTime {
        nanoseconds: Int!
        seconds: Int!
    }
    
    extend type User {
        id: ID!
        displayName: String!
        email: String!
        createdAt: DateTime!
    }

    extend type Mutation {
        ToggleCartHidden: Boolean!
        HideCart: Boolean!
        AddItemToCart(item: Item!): [Item]!
        RemoveItemFromCart(item: Item!): [Item]!
        ClearItemFromCart(item: Item!): [Item]!
        SetUser(user: User!): User!
    }
`;

const updateCartItemsQueries = (cache, newCartItems) => {
    cache.writeQuery({
        query: queries.GET_ITEM_COUNT,
        data: { itemCount: getItemCount(newCartItems) }
    });

    cache.writeQuery({
        query: queries.GET_TOTAL,
        data: { total: getTotal(newCartItems) }
    });

    cache.writeQuery({
        query: queries.GET_CART_ITEMS,
        data: { cartItems: newCartItems }
    });
};

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, { cache }) => {
            const { cartHidden } = cache.readQuery({
                query: queries.GET_CARD_HIDDEN
            });

            cache.writeQuery({
                query: queries.GET_CARD_HIDDEN,
                data: { cartHidden: !cartHidden }
            });

            return !cartHidden;
        },

        hideCart: (_root, _args, { cache }) => {
            cache.writeQuery({
                query: queries.GET_CARD_HIDDEN,
                data: { cartHidden: true }
            });

            return true;
        },

        addItemToCart: (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: queries.GET_CART_ITEMS
            });

            const newCartItems = addItemToCart(cartItems, item);

            updateCartItemsQueries(cache, newCartItems);

            return newCartItems;
        },

        removeItemFromCart: (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: queries.GET_CART_ITEMS
            });

            const newCartItems = removeItemFromCart(cartItems, item);

            updateCartItemsQueries(cache, newCartItems);

            return newCartItems;
        },

        clearItemFromCart:  (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: queries.GET_CART_ITEMS
            });

            const newCartItems = clearItemFromCart(cartItems, item);

            updateCartItemsQueries(cache, newCartItems);

            return newCartItems;
        },

        setUser: (_root, { user }, { cache }) => {
            cache.writeQuery({
                query: queries.GET_USER,
                data: { user }
            });

            return user;
        }
    }
};
