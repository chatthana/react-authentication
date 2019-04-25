import React, { Component } from 'react';
import { Container, Row, Col  } from 'reactstrap';
import { connect } from 'react-redux';
import { signin } from '../redux/async/auth';
import LoginForm from '../components/partials/loginForm';

class Login extends Component {
  
  handleAuthentication(credentials) {
    const { signin } = this.props;
    signin(credentials);
  } 

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xl="6" md="6">
            <h3>Login</h3>
          </Col>
        </Row>
        <Row className="justify-content-center my-3">
          <Col xl="6" md="6">
            <LoginForm
              onAuthenticate={this.handleAuthentication.bind(this)}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signin: credentials => dispatch(signin(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);