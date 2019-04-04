import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const history = createBrowserHistory();

export default initialState => {
  return createStore(
    rootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  );
}