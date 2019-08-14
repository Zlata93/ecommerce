import React, { useContext } from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import CollectionsContext from "../../contexts/collections/collections-context";
import useHideCart from "../../hooks/useHideCart";
import './CollectionPage.scss';

const CollectionPage = ({ match }) => {
    useHideCart();

    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionId];
    const { title, items } = collection;

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
