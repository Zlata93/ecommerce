import React from 'react';
import './PreviewCollection.scss';

const PreviewCollection = ({title, items}) => {
    return (
        <div className='preview-collection'>
            <h1 className='preview-collection__title'>{title}</h1>
            <div className='preview'>
                {items.filter((item, i) => i < 4).map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    )
};

export default PreviewCollection;
