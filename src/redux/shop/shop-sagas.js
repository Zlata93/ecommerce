import { takeEvery, call, put } from 'redux-saga/effects';
import { shopActionTypes } from './shop-types';
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop-actions";

export function* fetchCollectionsAsync() {
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
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
