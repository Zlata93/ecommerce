import userActionTypes from "./user-types";

const initialState = {
    user: null,
    err: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SIGNIN_SUCCESS:
            return { ...state, user: action.payload, err: null };
        case userActionTypes.SIGN_OUT_SUCCESS:
            return { ...state, user: null, err: null };
        case userActionTypes.SIGNIN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
            return { ...state, err: action.payload };
        default:
            return state;
    }
};

export default userReducer;
