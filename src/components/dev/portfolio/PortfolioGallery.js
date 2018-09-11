import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <Container className="conditional-padding">
      <Row className="center-items-horizontally">
        <Col md="12" lg="6" className="portfolio-col center-items">
          <div className="portfolio-gallery-item portfolio-gallery-item-1" />
        </Col>
        <Col md="12" lg="6" className="portfolio-col center-items">
          <div className="portfolio-gallery-item portfolio-gallery-item-2" />
        </Col>
      </Row>
      <Row className="center-items-horizontally">
        <Col md="12" lg="6" className="portfolio-col center-items">
          <div className="portfolio-gallery-item portfolio-gallery-item-3" />
        </Col>
        <Col md="12" lg="6" className="portfolio-col center-items">
          <div className="portfolio-gallery-item portfolio-gallery-item-4" />
        </Col>
      </Row>
    </Container>
  );
};
