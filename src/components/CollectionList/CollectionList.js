import React, { useContext, useEffect } from 'react';
import Collection from '../Collection/Collection';
import { CartContext } from '../../providers/cart/cart-provider';
import CollectionsContext from "../../contexts/collections/collections-context";
import './CollectionList.scss';

const CollectionList = () => {
    const { isHidden, hideCart } = useContext(CartContext);
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(key => collectionsMap[key]);

    useEffect(() => {
        (function() {
            if ("ontouchstart" in document.documentElement) {
                const collectionList = document.querySelector('.collection-list');
                if (collectionList) collectionList.className += " no-hover";
            }

            if (!isHidden) {
                hideCart();
            }

            window.scrollTo(0,0);
        })()
    }, []);

    return (
        <div className='collection-list'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <Collection key={id} {...otherProps} />
                ))
            }
        </div>
    );
};

export default CollectionList;
