import React from 'react';
import './GoodsItem.scss';

const GoodsItem = ({title, img, size}) => {
    return (
        <div  className={`goods__item ${size ? `goods__item_${size}` : ''}`}>
            <div style={{backgroundImage: `url(${img})`}} className='goods__background-img'/>
            <div className='goods__content content'>
                <h1 className='content__title'>{title}</h1>
                <div className='content__subtitle'>shop now</div>
            </div>
        </div>
    );
};

export default GoodsItem;
