import React from 'react';
import { Route } from 'react-router-dom';
import CollectionList from '../../components/CollectionList/CollectionList';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionList} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;
