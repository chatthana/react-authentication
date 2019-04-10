export const ALERT_INFO = 'ALERT_INFO';
export const ALERT_ERROR = 'ALERT_ERROR';
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_CLEAR = 'ALERT_CLEAR';

export const success = message => ({
  type: ALERT_SUCCESS,
  message
});

export const info = message => ({
  type: ALERT_INFO,
  message
});

export const error = message => ({
  type: ALERT_ERROR,
  message
});

export const clear = () => ({
 type: ALERT_CLEAR 
})