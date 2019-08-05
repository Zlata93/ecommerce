import userActionTypes from './user-types';

export const setCurrentUser = (user) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSigninStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START
});

export const emailSigninStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export const signinSuccess = (user) => ({
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: user
});

export const signinFailure = (err) => ({
    type: userActionTypes.SIGNIN_FAILURE,
    payload: err
});

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (err) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: err
});
