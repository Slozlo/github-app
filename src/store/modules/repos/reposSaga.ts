import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRepos } from '../../../api/repos';
import {
  fetchReposRequest,
  fetchReposSuccess,
  fetchReposFail
} from './reposActions';

function* fetchReposSaga(action: {
  payload: {
    orgLogin: string;
  };
}) {
  if (action.payload.orgLogin) {
    try {
      const result = yield call(fetchRepos, action.payload.orgLogin);

      yield put(fetchReposSuccess(result));
    } catch (e) {
      yield put(fetchReposFail(e.message));
    }
  } else {
    yield put(fetchReposSuccess([]));
  }
}

export default function* () {
  yield takeLatest(fetchReposRequest, fetchReposSaga);
}
