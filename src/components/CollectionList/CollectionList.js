import React, { useContext } from 'react';
import Collection from '../Collection/Collection';
import CollectionsContext from "../../contexts/collections/collections-context";
import useHideCart from "../../hooks/useHideCart";
import './CollectionList.scss';

const CollectionList = () => {
    useHideCart();

    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(key => collectionsMap[key]);

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
