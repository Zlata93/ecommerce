import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
import WithSpinner from "../../hocs/withSpinner/withSpinner";
import useNoHover from "../../hooks/useNoHover";
import Spinner from "../../components/Spinner/Spinner";

const CollectionList = lazy(() => import('../../components/CollectionList/CollectionList'));
const CollectionPage = lazy(() => import('../CollectionPage/CollectionPage'));

const ShopPage = ({ match, fetchCollectionsStart, isFetching }) => {

    const CollectionListWithSpinner = WithSpinner(CollectionList);
    const CollectionPageWithSpinner = WithSpinner(CollectionPage);

    useEffect(() => {
        (
            function(){
                fetchCollectionsStart();
            }
        )();
    }, [fetchCollectionsStart]);

    useNoHover('.shop-page');

    return (
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => <CollectionListWithSpinner isLoading={isFetching} {...props}/>}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={isFetching} {...props} />}
                />
            </Suspense>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
