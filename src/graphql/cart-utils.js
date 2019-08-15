export const addItemToCart = (cartItems, item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        // we need to return new array in order to trigger rerender
        return cartItems.map(item => (
            item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 }  : item
        ))
    }
    return [...cartItems, {...item, quantity: 1}];
};

export const removeItemFromCart = (cartItems, item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
        return cartItems.filter(item => item.id !== existingItem.id);
    }
    return cartItems.map(item => item.id === existingItem.id ? { ...item, quantity: item.quantity - 1 } : item);
};

export const clearItemFromCart = (cartItems, item) => cartItems.filter(cartItem => cartItem.id !==item.id);

export const getItemCount = (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

export const getTotal = (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
