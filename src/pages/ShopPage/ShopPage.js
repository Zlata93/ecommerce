import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase';
import CollectionList from '../../components/CollectionList/CollectionList';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = ({ match, updateCollections }) => {
    const unSubscribeFromSnapshot = () => {};

    useEffect(() => {
        (
            function(){
                const collectionRef = firestore.collection('collections');
                collectionRef.onSnapshot(async snapshot => {
                    updateCollections(convertCollectionsSnapshotToMap(snapshot));
                });
            }
        )();
    }, []);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionList} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
