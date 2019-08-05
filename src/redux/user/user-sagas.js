import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './user-types';
import { googleProvider, auth, createUserProfileDocument } from '../../firebase/firebase';
import { googleSigninSuccess, googleSigninFailure } from './user-actions';

function* signinWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (err) {
        yield put(googleSigninFailure(err));
    }
}

export function* onGoogleSigninStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle);
}

export function* userSagas() {
    yield all([
        call(onGoogleSigninStart)
    ]);
}
