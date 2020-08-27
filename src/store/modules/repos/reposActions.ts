import { createActions } from 'redux-actions';

import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAIL
} from './reposConstants';

export const {
  fetchReposRequest,
  fetchReposSuccess,
  fetchReposFail
} = createActions({
  [FETCH_REPOS_REQUEST]: (orgLogin: string) => ({
    orgLogin
  }),
  [FETCH_REPOS_SUCCESS]: (repos: any[]) => ({
    data: repos
  }),
  [FETCH_REPOS_FAIL]: (error: string) => ({ error })
});
