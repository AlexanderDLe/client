import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="Abilities-BG pt-5">
      <Container className="about-page">
        <Row className="text-center">
          <Col lg="4" className="p-card">
            <i className="abilities-icon fas fa-mobile" />
            <h1 className="pb-2 pt-3">Responsive</h1>
            <p className="text-muted">
              My designs are fully responsive and adjust smoothly to any device.
            </p>
          </Col>
          <Col lg="4" className="p-card">
            <i className="abilities-icon fas fa-atom" />
            <h1 className="pb-2 pt-3">Modern</h1>
            <p className="text-muted">
              My layouts and look are all based on modern UI/UX trends.
            </p>
          </Col>
          <Col lg="4" className="p-card">
            <i className="abilities-icon fas fa-lightbulb" />
            <h1 className="pb-2 pt-3">Dynamic</h1>
            <p className="text-muted">
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
