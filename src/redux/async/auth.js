import { signin_request, signin_success, signin_failure } from '../actions/auth';
import { push } from 'connected-react-router';
import { error as error_notification, success as success_notification } from '../actions/alert';
import { authenticate } from '../services/authentication';

/**
 * Asynchronous signin functionality
 * Note: It dispatches authentication-related actions including
 * - SIGNIN_REQUEST
 * - SIGNIN_SUCCESS
 * - SIGNIN_FAILURE
 * @param {object} credentials
 */

export const signin = credentials => {
  return dispatch => {
    dispatch(signin_request(credentials));
    authenticate(credentials)
    .then(user => {
      localStorage.setItem('authToken', user.token);
      dispatch(success_notification('Successfully logged in'));
      dispatch(signin_success(user));
      dispatch(push('/'));
    }).catch(error => {
      dispatch(error_notification(error));
      dispatch(signin_failure(error));
    });
  };
}

export const signout = () => {
  localStorage.removeItem('authToken');
}