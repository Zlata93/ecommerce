import React, { useContext, useEffect } from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import CollectionsContext from "../../contexts/collections/collections-context";
import { CartContext } from '../../providers/cart/cart-provider';
import './CollectionPage.scss';

const CollectionPage = ({ match }) => {
    const { isHidden, hideCart } = useContext(CartContext);
    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionId];
    const { title, items } = collection;

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

    return (
        <div className='collection-page'>
            <h2 className='collection-page__title'>{title}</h2>
            <div className='collection-page__items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default CollectionPage;
