import { cartActionTypes } from './cart-types';
import { addItemToCart } from './cart-utils';
import { removeItemFromCart } from './cart-utils';

const initialState = {
    isHidden: true,
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {...state, isHidden: !state.isHidden };
        case cartActionTypes.ADD_ITEM:
            return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
        case cartActionTypes.CLEAR_ITEM:
            return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id) };
        case cartActionTypes.REMOVE_ITEM:
            return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) };
        default:
            return state;
    }
};

export default cartReducer;
