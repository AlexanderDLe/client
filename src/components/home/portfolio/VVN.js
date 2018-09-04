import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VVNimg from '../../../img/VVN Site.png';
import MyButton from '../../utility/MyButton';
export default () => {
  return (
    <div className="full-page blueBG portfolio-container">
      <Container className="test">
        <Row className="portfolio-container">
          <Col>
            <img src={VVNimg} className="portfolio-icon" alt="" />
          </Col>
          <Col md="12" xl="6" className="py-5 center-items">
            <h1 className="OpenSans page-title text-center py-1">VVN</h1>
            <p className="lead">
              A custom site developed for electronic artist VVN.
            </p>
            <p className="text-muted">
              This page features music, services, information, and artwork
              belonging to VVN. Responsive, detailed, and stylish - it perfectly
              suits her unique identity. Check it out.
            </p>
            <div className="m-2 row">
              <MyButton to={'/portfolio'} color={'black'} name={'Website'} />
              <MyButton to={'/portfolio'} color={'black'} name={'Code'} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
