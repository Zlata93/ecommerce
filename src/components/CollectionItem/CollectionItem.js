import React from 'react';
import Button from '../Button/Button';
import './CollectionItem.scss';

const CollectionItem = ({item, addItem}) => {
    const { imageUrl, price, name } = item;

    return (
        <div className='collection__item collection-item'>
            <div className='collection-item__image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-item__footer'>
                <span className='collection-item__name'>{name}</span>
                <span className='collection-item__price'>{price}</span>
            </div>
            <Button type='inverted' classname='collection-item__button' onClick={() => addItem(item)}>Add to cart</Button>
        </div>
    );
};

export default CollectionItem;
