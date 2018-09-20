import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import XanAboutIMG from '../../img/IMBATMAN.jpg';

export default () => {
  return (
    <div id="xan-about" className="half-page center-items ">
      <Container>
        <div className="musicHero musicHero-1" />
        <Row>
          <Col md="12" lg="6" className="center-items xan-text-light mb-5">
            <h1 className="xan-text-light OpenSans xan-title">ABOUT</h1>
            <hr className="hr-white" />
            <p className="xan-text">
              I've been producing music for about 7 years. As a fan of all kinds
              of music - ranging from cinematic to electronic - I enjoy
              exploring and experimenting with different genres.
            </p>
            <p className="xan-text">
              What is amazing about music is the beauty and energy found in its
              many forms. It can be passionate, captivating, and awe-inspiring.
              Listening to and creating music is always an adventure.
            </p>
          </Col>
          <Col md="12" lg="6" className="center-items">
            <img src={XanAboutIMG} className="MyIMG" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
