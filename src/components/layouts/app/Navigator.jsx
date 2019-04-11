import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }


  render() {

    const { isOpen } = this.state;

    return (
      <Navbar dark color="dark" expand="md">
        <Container>
          <NavbarBrand href="/">React Authenticable <span style={{fontSize: '0.55em'}}>by Squarevelvet</span></NavbarBrand>
          <NavbarToggler onClick={this.toggle.bind(this)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}