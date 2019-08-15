import { useEffect } from 'react';
import { onPageNav } from '../utils/helpers';

const useHideCart = (isHidden, hideCart) => {

    useEffect(() => {
        (function() {
            onPageNav(isHidden, hideCart);
        })()
    }, []);
};

export default useHideCart;
