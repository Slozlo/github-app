import { handleActions } from 'redux-actions';
import {
  fetchReposRequest,
  fetchReposSuccess,
  fetchReposFail
} from './reposActions';

const initialState = {
  data: [],
  error: null,
  loading: false
};

export default handleActions(
  {
    [`${fetchReposRequest}`]: () => ({ ...initialState, loading: true }),
    [`${fetchReposFail}`]: (state, { payload: { error } }) => ({
      ...state,
      loading: false,
      error
    }),
    [`${fetchReposSuccess}`]: (state, { payload: { data } }) => ({
      ...state,
      loading: false,
      data
    })
  },
  initialState
);
