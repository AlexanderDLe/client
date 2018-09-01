import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VVNimg from '../../../img/VVN Site.png';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="full-page blueBG portfolio-container">
      <Container className="test">
        <Row className="portfolio-container">
          <Col>
            <img src={VVNimg} className="portfolio-icon" alt="" />
          </Col>
          <Col md="12" xl="6" className="py-5 center-items">
            <h1 className="text-center py-3">VVN Artist Page</h1>
            <p className="lead">
              A custom tailored site developed for electronic artist VVN.
            </p>
            <p className="text-muted">
              This page features music, services, information, and artwork
              belonging to VVN. Responsive, detailed, and stylish - it perfectly
              suits her unique identity. Check it out.
            </p>
            <div className="row">
              <Link
                to="/portfolio"
                className="text-center mx-2 my-button my-button-black"
              >
                Website
              </Link>
              <Link
                to="/portfolio"
                className="text-center mx-2 my-button my-button-black"
              >
                Code
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
