import React from 'react';
import { Route } from 'react-router-dom';
import CollectionFull from '../../components/CollectionFull/CollectionFull';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionFull} />
        </div>
    );
};

export default ShopPage;
