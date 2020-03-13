import { all, call } from 'redux-saga/effects';

import { dataSagas } from './sagas/dataSagas';

export default function* rootSaga() {
  yield all([call(dataSagas)]);
}
