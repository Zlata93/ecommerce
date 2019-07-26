import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    (shop) => shop.shopData
);

// transforming object into array for CollectionList
export const selectCollections = createSelector(
    [selectShopData],
    (shopData) => shopData ? Object.keys(shopData).map(key => shopData[key]) : []
);

export const selectCollection = (urlParam) => createSelector(
    [selectShopData],
    (shopData) => shopData ? shopData[urlParam] : null
);
