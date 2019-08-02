import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';
import CollectionList from '../../components/CollectionList/CollectionList';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from "../../hocs/withSpinner/withSpinner";

const ShopPage = ({ match, fetchCollectionsStart, isFetching }) => {

    const CollectionListWithSpinner = WithSpinner(CollectionList);
    const CollectionPageWithSpinner = WithSpinner(CollectionPage);

    useEffect(() => {
        (
            function(){
                fetchCollectionsStart();
            }
        )();
    }, []);

    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                render={(props) => <CollectionListWithSpinner isLoading={isFetching} {...props}/>}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner isLoading={isFetching} {...props} />}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching,
    // isLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
