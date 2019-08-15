import React from 'react';
import GoodsItem from '../GoodsItem/GoodsItem';
import goodsData from "./goods-data";
import './Goods.scss';

const Goods = () => {
    return (
        <div className='goods'>
            {goodsData.map(({id, ...otherProps}) => (
                <GoodsItem
                    key={id}
                    {...otherProps}
                />
            ))}
        </div>
    );
};

export default Goods;
