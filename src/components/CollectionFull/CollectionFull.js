import React from 'react';
import { connect } from 'react-redux';
import { selectShopData } from '../../redux/shop/shop-selectors';
import Collection from '../Collection/Collection';
import './CollectionFull.scss';

const CollectionFull = ({ shopData }) => {
    return (
        <div className='full-collection'>
            {
                shopData.map(({ id, ...otherProps }) => (
                    <Collection key={id} {...otherProps} />
                ))
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    shopData: selectShopData(state)
});

export default connect(mapStateToProps)(CollectionFull);
