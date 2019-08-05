import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { onPageNav } from '../../utils/helpers';
import './CollectionPage.scss';

const CollectionPage = ({ collection, isHidden, hideCart }) => {
    const { title , items } = collection;

    useEffect(() => {
        onPageNav(isHidden, hideCart);
    }, [hideCart]);

    return (
        <div className='collection-page'>
            <h2 className='collection-page__title'>{title}</h2>
            <div className='collection-page__items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    hideCart: () => dispatch(hideCart())
});

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    isHidden: selectCartHidden(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
