import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import CollectionsContext from "../../contexts/collections/collections-context";
import './CollectionPage.scss';

const CollectionPage = ({ isHidden, hideCart, match }) => {

    useEffect(() => {
        (function() {
            if ("ontouchstart" in document.documentElement) {
                const collectionPage = document.querySelector('.collection-page');
                if (collectionPage) collectionPage.className += " no-hover";
            }

            if (!isHidden) {
                hideCart();
            }

            window.scrollTo(0,0);
        })()
    }, []);

    return (
        <CollectionsContext.Consumer>
            {
                collections => {
                    const collection = collections[match.params.collectionId];
                    const { title, items } = collection;

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
                }
            }

        </CollectionsContext.Consumer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    hideCart: () => dispatch(hideCart())
});

const mapStateToProps = (state, ownProps) => ({
    isHidden: selectCartHidden(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
