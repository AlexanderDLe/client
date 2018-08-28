import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="full-page">
      <h1 className="text-center">About</h1>
      <Container className="about-page">
        <Row className="text-center">
          <Col lg="4" className="py-5">
            <i class="icon fas fa-mobile" />
            <h1>Responsive</h1>
            <p className="lead">
              I am able to build responsive designs that adjust to any device.
            </p>
          </Col>
          <Col lg="4" className="py-5">
            <i class="icon fas fa-atom" />
            <h1>Modern</h1>
            <p className="lead">
              I enjoy creating sleek and modern designs with the latest tools.
            </p>
          </Col>
          <Col lg="4" className="py-5">
            <i class="icon fas fa-lightbulb" />
            <h1>Dynamic</h1>
            <p className="lead">
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
