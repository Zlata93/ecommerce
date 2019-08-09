import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import './Collection.scss';

const Collection = ({title, items, routeName}) => {
    return (
        <div className='collection'>
            <h1 className='collection__title'>
                <Link to={`shop/${routeName}`}>
                    {title}
                </Link>
            </h1>
            <div className='collection__body'>
                {items.filter((item, i) => i < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
};

export default Collection;
