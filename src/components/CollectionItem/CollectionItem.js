import React from 'react';
import './CollectionItem.scss';

const CollectionItem = ({id, name, price, imageUrl}) => {
    return (
        <div className='collection__item collection-item'>
            <div className='collection-item__image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-item__footer'>
                <span className='collection-item__name'>{name}</span>
                <span className='collection-item__price'>{price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;
