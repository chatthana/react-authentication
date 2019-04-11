import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from '../actions/auth';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  authToken: null,
  errors: {}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SIGNIN_SUCCESS:
      return { ...state, isAuthenticated: true, currentUser: action.user, authToken: action.user.token };
    case SIGNIN_FAILURE:
      return { ...state, errors: action.errors }
    default:
      return state;
  }
}