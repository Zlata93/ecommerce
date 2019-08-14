import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import Collection from '../Collection/Collection';
import { createStructuredSelector } from 'reselect';
import './CollectionList.scss';

const CollectionList = ({ collections, isHidden, hideCart }) => {

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
                collections.map(({ id, ...otherProps }) => (
                    <Collection key={id} {...otherProps} />
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isHidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
    hideCart: () => dispatch(hideCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
