import { gql } from 'apollo-boost';
import { addItemToCart, getItemCount } from './cart-utils';
import queries from "./queries";

export const typeDefs = gql`
    extend type Item {
        quantity: Int
    }

    extend type Mutation {
        ToggleCartHidden: Boolean!
        HideCart: Boolean!
        AddItemToCart(item: Item!): [Item]!
    }
`;

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, { cache }, _info) => {
            const { cartHidden } = cache.readQuery({
                query: queries.GET_CARD_HIDDEN
            });

            cache.writeQuery({
                query: queries.GET_CARD_HIDDEN,
                data: { cartHidden: !cartHidden }
            });

            return !cartHidden;
        },

        hideCart: (_root, _args, { cache }, _info) => {
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

            cache.writeQuery({
                query: queries.GET_ITEM_COUNT,
                data: { itemCount: getItemCount(newCartItems) }
            });

            cache.writeQuery({
                query: queries.GET_CART_ITEMS,
                data: { cartItems: newCartItems }
            });

            return newCartItems;
        }
    }
};
