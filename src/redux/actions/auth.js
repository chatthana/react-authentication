export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const signin_request = credentials => ({
  type: SIGNIN_REQUEST,
  credentials
});

export const signin_success = user => ({
  type: SIGNIN_SUCCESS,
  user
});

export const signin_failure = () => ({
  type: SIGNIN_FAILURE
});