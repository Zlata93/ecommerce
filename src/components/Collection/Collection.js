import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './Collection.scss';

const Collection = ({title, items}) => {
    return (
        <div className='collection'>
            <h1 className='collection__title'>{title}</h1>
            <div className='collection__body'>
                {items.filter((item, i) => i < 4).map(({id, ...otherProps}) => (
                    <CollectionItem key={id} {...otherProps} />
                ))}
            </div>
        </div>
    )
};

export default Collection;