import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ApplicationLayout from './components/layouts/app';
import { connect } from 'react-redux';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import LoginPage from './pages/Login';

const ProtectedRoute = ({ component: Component, authToken, ...rest  }) => (
  <Route
    { ...rest }
    render={props =>
      authToken ?
      <Component { ...props } /> :
      <Redirect to="/login" />
    }
   />
);

class EntryPointRouter extends Component {

  render() {
    const { authToken } = this.props;
    return (
      <ApplicationLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/about" component={AboutPage} authToken={authToken} />  
        </Switch>
      </ApplicationLayout>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authToken: state.auth.authToken
  };
};

export default connect(mapStateToProps)(EntryPointRouter);