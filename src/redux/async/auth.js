import { signin_request, signin_success, signin_failure } from '../actions/auth';
import { push } from 'connected-react-router';
import { authenticate } from '../services/authentication';

export const signin = credentials => {
  return dispatch => {
    console.log(credentials);
    dispatch(signin_request(credentials));
    authenticate(credentials)
    .then(user => {
      localStorage.setItem('authToken', user.token);
      dispatch(signin_success(user));
      dispatch(push('/'));
    }).catch(error => {
      console.log(error);
      dispatch(signin_failure());
    });
  };
}

export const signout = () => {
  localStorage.removeItem('authToken');
}