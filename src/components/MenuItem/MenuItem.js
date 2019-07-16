import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title}) => {
    return (
        <div className='dir-menu__item'>
            <div className='content'>
                <h1 className='content__title'>{title}</h1>
                <div className='content__subtitle'>shop now</div>
            </div>
        </div>
    );
};

export default MenuItem;
