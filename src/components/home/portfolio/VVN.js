import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VVNimg from '../../../img/VVN Site.png';

export default () => {
  return (
    <div className="full-page greyBG portfolio-container">
      <Container className="test">
        <Row className="portfolio-container">
          <Col>VVN Site</Col>
          <Col>
            <img src={VVNimg} className="portfolio-icon" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
