import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row className="my-3">
          <Col>
            <h4>About Page</h4>
            <p>We are the big fan of JavaScript and it works pretty well with our projects</p>
          </Col>
        </Row>
      </Container>
    );
  }
}