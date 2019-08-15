import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import Collection from '../Collection/Collection';
import './CollectionList.scss';
import useHideCart from "../../hooks/useHideCart";

const CollectionList = ({ shopData, isHidden, hideCart }) => {

    useHideCart(isHidden, hideCart);

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
