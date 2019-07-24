import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop-selectors';
import Collection from '../Collection/Collection';
import './CollectionList.scss';

const CollectionList = ({ shopData }) => {
    return (
        <div className='collection-list'>
            {
                shopData.map(({ id, ...otherProps }) => (
                    <Collection key={id} {...otherProps} />
                ))
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    shopData: selectCollections(state)
});

export default connect(mapStateToProps)(CollectionList);
