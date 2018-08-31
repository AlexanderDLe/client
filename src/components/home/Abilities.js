import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="About-BG">
      <Container className="about-page">
        <Row className="text-center">
          <Col lg="4" className="p-5">
            <i class="icon fas fa-mobile" />
            <h1 className="pb-2 pt-3">Responsive</h1>
            <p className="lead">
              I am able to build responsive designs that adjust smoothly to any
              device.
            </p>
          </Col>
          <Col lg="4" className="p-5">
            <i class="icon fas fa-atom" />
            <h1 className="pb-2 pt-3">Modern</h1>
            <p className="lead">
              My layouts and look are all based on modern UI/UX practices.
            </p>
          </Col>
          <Col lg="4" className="p-5">
            <i class="icon fas fa-lightbulb" />
            <h1 className="pb-2 pt-3">Dynamic</h1>
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
