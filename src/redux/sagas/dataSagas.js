/* eslint-disable no-console */
import { takeLatest, put, call, all } from 'redux-saga/effects';

import DATA from '../types/dataTypes';
import { fetchApiSuccess, fetchApiFailure, toogleDataLoading } from '../actions/dataActions';
import getFromApi from '../helpers/dataHelpers';

export function* fetchApi({ payload }) {
  try {
    yield put(toogleDataLoading(true));
    const gnomesData = yield call(getFromApi, payload);
    yield put(fetchApiSuccess(gnomesData));
  } catch (error) {
    yield put(fetchApiFailure(error.message));
    console.log(error);
  }
}

export function* onFetchApiStart() {
  yield takeLatest(DATA.FETCH_API_START, fetchApi);
}

export function* dataSagas() {
  yield all([call(onFetchApiStart)]);
}
