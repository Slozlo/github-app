import { all } from 'redux-saga/effects';
import reposSaga from './modules/repos/reposSaga';

export default function* rootSaga() {
  yield all([reposSaga()]);
}
