import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="my-3">
          <Col>
            <h4>Simple column that works</h4>
            <Link to="/about"><Button color="danger">About</Button></Link>
          </Col>
          <Col>
            <h4>We use ReactStrap to build</h4>
          </Col>
          <Col>
            <h4>As the name implies</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}