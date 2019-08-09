import shopActionTypes from './shop-types';

const initialState = {
    shopData: null,
    isFetching: true,
    errorMessage: ''
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case shopActionTypes.FETCH_COLLECTIONS_START:
            return { ...state, isFetching: true };
        case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return { ...state, shopData: action.payload, isFetching: false };
        case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return { ...state, errorMessage: action.payload, isFetching: false };
        default:
            return state;
    }
};

export default shopReducer;
