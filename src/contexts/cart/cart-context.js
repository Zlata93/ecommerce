import { createContext } from 'react';

const CartContext = createContext({
    isHidden: true,
    toggleHidden: () => {},
    hideCart: () => {}
});

export default CartContext;
