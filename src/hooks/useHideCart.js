import { useEffect, useContext } from 'react';
import { CartContext } from "../providers/cart/cart-provider";

const useHideCart = () => {
    const { isHidden, hideCart } = useContext(CartContext);

    useEffect(() => {
        (function() {
            if ("ontouchstart" in document.documentElement) {
                const collectionPage = document.querySelector('.collection-page');
                if (collectionPage) collectionPage.className += " no-hover";
            }

            if (!isHidden) {
                hideCart();
            }

            window.scrollTo(0,0);
        })()
    }, []);
};

export default useHideCart;
