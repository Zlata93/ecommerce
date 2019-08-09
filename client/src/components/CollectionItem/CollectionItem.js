import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';
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

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
