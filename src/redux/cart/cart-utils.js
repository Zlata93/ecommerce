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
