import { gql } from 'apollo-boost';

export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
        HideCart: Boolean!
    }
`;

const GET_CARD_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, { cache }, _info) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CARD_HIDDEN
            });

            cache.writeQuery({
                query: GET_CARD_HIDDEN,
                data: { cartHidden: !cartHidden }
            });

            return !cartHidden;
        },

        hideCart: (_root, _args, { cache }, _info) => {
            cache.writeQuery({
                query: GET_CARD_HIDDEN,
                data: { cartHidden: true }
            });

            return true;
        }
    }
};
