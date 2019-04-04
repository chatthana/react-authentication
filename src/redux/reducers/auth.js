import {
  SIGNIN_SUCCESS
} from '../actions/auth';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  authToken: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SIGNIN_SUCCESS:
      return { ...state, isAuthenticated: true, currentUser: action.user, authToken: action.user.token };
    default:
      return state;
  }
}