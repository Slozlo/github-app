import { combineReducers } from 'redux';
import reposReducer from './modules/repos/reposReducer';

export default combineReducers({
  repos: reposReducer
});
