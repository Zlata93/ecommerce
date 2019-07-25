import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import Collection from '../Collection/Collection';
import './CollectionList.scss';

const CollectionList = ({ shopData, isHidden, hideCart }) => {

    useEffect(() => {
        (function() {
            if ("ontouchstart" in document.documentElement) {
                const collectionList = document.querySelector('.collection-list');
                if (collectionList) collectionList.className += " no-hover";
            }

            if (!isHidden) {
                hideCart();
            }

            window.scrollTo(0,0);
        })()
    }, []);

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
    shopData: selectCollections(state),
    isHidden: selectCartHidden(state)
});

const mapDispatchToProps = (dispatch) => ({
    hideCart: () => dispatch(hideCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
