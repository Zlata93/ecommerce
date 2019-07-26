import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase';
import CollectionList from '../../components/CollectionList/CollectionList';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from "../../hocs/withSpinner/withSpinner";

const ShopPage = ({ match, updateCollections }) => {
    const [isLoading, setLoading] = useState(true);

    const unSubscribeFromSnapshot = () => {};

    const CollectionListWithSpinner = WithSpinner(CollectionList);
    const CollectionPageWithSpinner = WithSpinner(CollectionPage);

    useEffect(() => {
        (
            function(){
                const collectionRef = firestore.collection('collections');
                collectionRef.onSnapshot(async snapshot => {
                    updateCollections(convertCollectionsSnapshotToMap(snapshot));
                    setLoading(false);
                });
            }
        )();
    }, []);

    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                render={(props) => <CollectionListWithSpinner isLoading={isLoading} {...props}/>}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
