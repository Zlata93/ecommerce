import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import './CollectionPage.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    useEffect(() => {
        (function() {
            if ("ontouchstart" in document.documentElement) {
                const collectionPage = document.querySelector('.collection-page');
                if (collectionPage) collectionPage.className += " no-hover";
            }
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

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
