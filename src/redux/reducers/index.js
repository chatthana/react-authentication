import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import alert from './alert';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  alert
});