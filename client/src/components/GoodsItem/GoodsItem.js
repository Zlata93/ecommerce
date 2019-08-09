import React from 'react';
import { withRouter } from 'react-router-dom';
import './GoodsItem.scss';

const GoodsItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return (
        <div  className={`goods__item ${size ? `goods__item_${size}` : ''}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div style={{backgroundImage: `url(${imageUrl})`}} className='goods__background-img'/>
            <div className='goods__content content'>
                <h1 className='content__title'>{title}</h1>
                <div className='content__subtitle'>shop now</div>
            </div>
        </div>
    );
};

export default withRouter(GoodsItem);
