import React from 'react';
import { useEffect } from 'react';
import { default as CollectionItem } from "../../components/CollectionItem/CollectionItemContainer";
import './CollectionPage.scss';

const CollectionPage = ({ collection, isHidden, hideCart }) => {
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
