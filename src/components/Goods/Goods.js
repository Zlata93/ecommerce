import React from 'react';
import { connect } from 'react-redux';
import { selectGoodsSection } from '../../redux/goods/goods-selector';
import GoodsItem from '../GoodsItem/GoodsItem';
import './Goods.scss';

const Goods = ({ sections }) => {
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

const mapStateToProps = (state) => ({
    sections: selectGoodsSection(state)
});

export default connect(mapStateToProps)(Goods);
