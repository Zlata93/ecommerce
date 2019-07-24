import React from 'react';
import { connect } from 'react-redux';
import { selectShopData } from '../../redux/shop/shop-selectors';
import Collection from '../../components/Collection/Collection';

const ShopPage = ({ shopData }) => {
    return (
        <div className='shop-page'>
            {shopData.map(({id, ...otherProps}) => (
                <Collection key={id} {...otherProps}/>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    shopData: selectShopData(state)
});

export default connect(mapStateToProps)(ShopPage);
