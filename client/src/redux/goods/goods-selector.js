import { createSelector } from 'reselect';

const selectGoods = (state) => state.goods;

export const selectGoodsSection = createSelector(
    [selectGoods],
    (goods) => goods.sections
);
