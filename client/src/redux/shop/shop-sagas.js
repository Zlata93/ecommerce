import { takeLatest, call, put, all } from 'redux-saga/effects';
import shopActionTypes from './shop-types';
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop-actions";

function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (err) {
        yield put(fetchCollectionsFailure(err.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}
