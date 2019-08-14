import React from 'react';
import { Route } from 'react-router-dom';
import { default as CollectionList } from "../../components/CollectionList/CollectionListContainer";
import { default as CollectionPage } from "../CollectionPage/CollectionPageContainer";

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionList} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;
