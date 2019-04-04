import React, { Component } from 'react';
import EntryPointRouter from './router';
import { Provider } from 'react-redux';
import intiailiseReduxStore, { history } from './redux/store';
import { ConnectedRouter } from 'connected-react-router';

const store = intiailiseReduxStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <EntryPointRouter />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
