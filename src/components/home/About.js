import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="full-page">
      <Container className="">
        <Row className="text-center">
          <Col>
            <h1>Responsive</h1>
            <p className="lead">
              My layouts will work on any device, big or small.
            </p>
          </Col>
          <Col>
            <h1>Modern</h1>
            <p className="lead">
              I enjoy creating sleek and modern designs with the latest tools.
            </p>
          </Col>
          <Col>
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
