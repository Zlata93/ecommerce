import userActionTypes from "./user-types";

const initialState = {
    user: null,
    err: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
        case userActionTypes.EMAIL_SIGNIN_SUCCESS:
            return { ...state, user: action.payload, err: null };
        case userActionTypes.GOOGLE_SIGNIN_FAILURE:
        case userActionTypes.EMAIL_SIGNIN_FAILURE:
            return { ...state, err: action.payload };
        default:
            return state;
    }
};

export default userReducer;
