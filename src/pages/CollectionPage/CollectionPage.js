import React from 'react';
import { default as CollectionItem } from "../../components/CollectionItem/CollectionItemContainer";
import useHideCart from "../../hooks/useHideCart";
import './CollectionPage.scss';

const CollectionPage = ({ collection, isHidden, hideCart }) => {
    const { title, items } = collection;

    useHideCart(isHidden, hideCart);

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
