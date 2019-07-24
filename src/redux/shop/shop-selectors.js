import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    (shop) => shop.shopData
);

export const selectCollection = (urlParam) => createSelector(
    [selectShopData],
    (shopData) => shopData[urlParam]
);
