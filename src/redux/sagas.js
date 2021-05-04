import * as types from './types';
import * as actions from './actions';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import requests from "./requests";

function* getPhotosSaga({ payload }) {
    const { start, limit, query } = payload;
    const response = yield call(requests.getPhotos, start, limit, query);
    if (response) {
        yield put(actions.loadedPhotos(response));
    }
}

function* getUsersSaga({ }) {
    const response = yield call(requests.getUsers);
    if(response) {
        yield put(actions.loadedUsers(response));
    }
}

export default function* saga() {
    yield all([
        takeLatest(types.LOAD_PHOTOS, getPhotosSaga),
        takeLatest(types.LOAD_USERS, getUsersSaga)
    ])
}

