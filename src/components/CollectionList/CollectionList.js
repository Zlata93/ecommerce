import React from 'react';
import { useEffect } from 'react';
import Collection from '../Collection/Collection';
import './CollectionList.scss';

const CollectionList = ({ collections, isHidden, hideCart }) => {

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
