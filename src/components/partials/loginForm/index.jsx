import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  Button
} from 'reactstrap';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { onAuthenticate } = this.props;
    const credentials = {
      email,
      password
    };
    onAuthenticate(credentials);
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
                <Label for="email">Your email</Label>
                <Input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Your password</Label>
                <Input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LoginForm;