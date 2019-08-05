import userActionTypes from './user-types';

export const setCurrentUser = (user) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSigninStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START
});

export const googleSigninSuccess = (user) => ({
    type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
    payload: user
});

export const googleSigninFailure = (err) => ({
    type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
    payload: err
});

export const emailSigninStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export const emailSigninSuccess = (user) => ({
    type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
    payload: user
});

export const emailSigninFailure = (err) => ({
    type: userActionTypes.EMAIL_SIGNIN_FAILURE,
    payload: err
});
