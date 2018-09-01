import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Lambadaimg from '../../../img/Lambada Site.png';
import MyButton from '../../utility/MyButton';

export default () => {
  return (
    <div className="full-page greenBG portfolio-container">
      <Container className="test">
        <Row className="portfolio-container">
          <Col md="12" xl="6" className="py-5 center-items">
            <h1 className="text-center py-1">Lambada Tea & Frizzle</h1>
            <p className="lead">
              A bright and simplistic site for a welcoming boba shop.
            </p>
            <p className="text-muted">
              This friendly page features a full menu gallery, a sliding image
              carousel, information, and nice vibes. Fully responsive, quick,
              and easy to get the info you need - it's perfect for a boba shop.
            </p>
            <div className="m-2 row">
              <MyButton to={'/portfolio'} color={'black'} name={'Website'} />
              <MyButton to={'/portfolio'} color={'black'} name={'Code'} />
            </div>
          </Col>
          <Col>
            <img src={Lambadaimg} className="portfolio-icon" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
