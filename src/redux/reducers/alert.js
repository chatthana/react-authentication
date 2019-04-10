import { ALERT_ERROR, ALERT_CLEAR, ALERT_INFO, ALERT_SUCCESS } from '../actions/alert';

export default (state = {}, action) => {
  switch(action.type) {
    case ALERT_SUCCESS:
      return { type: 'success', message: action.message };
    case ALERT_INFO:
      return { type: 'info', message: action.message };
    case ALERT_ERROR:
      return { type: 'danger', message: action.message };
    case ALERT_CLEAR:
      return {};
    default:
      return state;
  }
};