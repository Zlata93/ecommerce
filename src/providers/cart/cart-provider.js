import React, { createContext, useState, useEffect } from 'react';
import { addItemToCart, removeItemFromCart, clearItemFromCart, getCartItemsCount, getCartTotal } from './cart-utils';

export const CartContext = createContext({
    isHidden: true,
    toggleHidden: () => {},
    hideCart: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {},
    cartItemsCount: 0,
    cartTotal: 0
});

const CartProvider = ({ children }) => {
    const [isHidden, setIsHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const toggleHidden = () => setIsHidden(!isHidden);
    const hideCart = () => setIsHidden(true);
    const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
    const clearItem = (item) => setCartItems(clearItemFromCart(cartItems, item));

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{
            isHidden,
            toggleHidden,
            hideCart,
            cartItems,
            addItem,
            removeItem,
            clearItem,
            cartItemsCount,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
