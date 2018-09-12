import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';

export default () => {
  return (
    <Container className="pt-5">
      <Row className="text-center">
        <Col lg="4" className="p-card">
          <Fade left>
            <i className="abilities-icon fas fa-mobile" />
            <h1 className="pb-2 pt-3 OpenSans">Responsive</h1>
            <p className="text-muted">
              My designs are and adjust smoothly to any device.
            </p>
          </Fade>
        </Col>
        <Col lg="4" className="p-card">
          <Fade bottom>
            <i id="test" className="abilities-icon fas fa-atom" />
            <h1 className="pb-2 pt-3 OpenSans">Modern</h1>
            <p className="text-muted">
              My layouts are all based on modern UI/UX trends.
            </p>
          </Fade>
        </Col>
        <Col lg="4" className="p-card">
          <Fade right>
            <i className="abilities-icon fas fa-lightbulb" />
            <h1 className="pb-2 pt-3 OpenSans">Dynamic</h1>
            <p className="text-muted">
              I enjoy bringing sites to life with animations.
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};
