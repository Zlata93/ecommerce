import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './user-types';
import { googleProvider, auth, createUserProfileDocument } from '../../firebase/firebase';
import { signinSuccess, signinFailure } from './user-actions';

function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (err) {
        yield put(signinFailure(err));
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

export function* userSagas() {
    yield all([
        call(onGoogleSigninStart),
        call(onEmailSigninStart)
    ]);
}
