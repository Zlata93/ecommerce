import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './user-types';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase';
import { signinSuccess, signinFailure, signOutSuccess, signOutFailure } from './user-actions';

function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (err) {
        yield put(signinFailure(err));
    }
}

function* isUserAuthenticated() {
    try {
        const user = yield getCurrentUser();
        if (!user) {
            return;
        }
        yield getSnapshotFromUserAuth(user);
    } catch (err) {
        yield put(signinFailure(err));
    }
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (err) {
        yield signOutFailure(err);
    }
}

function* signinWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (err) {
        yield put(signinFailure(err));
    }
}

function* signinWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    } catch (err) {
        yield put(signinFailure(err));
    }
}

export function* onGoogleSigninStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle);
}


export function* onEmailSigninStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signinWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
    yield all([
        call(onGoogleSigninStart),
        call(onEmailSigninStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ]);
}
