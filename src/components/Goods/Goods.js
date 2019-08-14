import React, { useContext } from 'react';
import GoodsItem from '../GoodsItem/GoodsItem';
import GoodsContext from "../../contexts/goods/goods-context";
import './Goods.scss';

const Goods = () => {
    const sections = useContext(GoodsContext);
    return (
        <div className='goods'>
            {sections.map(({id, ...otherProps}) => (
                <GoodsItem
                    key={id}
                    {...otherProps}
                />
            ))}
        </div>
    );
};

export default Goods;
