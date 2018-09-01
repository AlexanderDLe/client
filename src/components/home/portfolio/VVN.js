import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VVNimg from '../../../img/VVN Site.png';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="full-page greyBG portfolio-container">
      <Container className="test">
        <Row className="portfolio-container">
          <Col>
            <img src={VVNimg} className="portfolio-icon" alt="" />
          </Col>
          <Col md="12" xl="6" className="p-5 center-items">
            <h1 className="text-center p-3">VVN Artist Page</h1>
            <p className="lead">
              A custom tailored site developed for electronic artist VVN.
            </p>
            <p className="text-muted">
              This page features music, services, information, and artwork
              belonging to VVN. Responsive, detailed, and stylish - it perfectly
              suits her unique identity. Check it out.
            </p>
            <Link
              to="/portfolio"
              className="mb-3 mt-1 text-center my-button my-button-black"
            >
              Website
            </Link>
            <Link
              to="/portfolio"
              className="text-center my-button my-button-black"
            >
              Code
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
