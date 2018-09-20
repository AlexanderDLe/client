import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Fade } from 'react-reveal';
import SmoothScrollButton from '../utility/SmoothScrollButton';
import AudioIMG from '../../img/Studio.PNG';

export default () => {
  return (
    <div id="audio" className="full-page center-items page-padding">
      <Container>
        <div className="musicHero-2" />
        <Row>
          <Col md="12" lg="6" className="center-items xan-text-light mb-5">
            <h1 className="xan-text-light OpenSans xan-title">AUDIO</h1>
            <hr className="hr-white" />
            <p className="xan-text">
              Audio engineering is the process in which one uses tools such as
              equalizers, dynamic processors, saturators, etc. to manipulate
              audio to achieve higher quality sound. Aspects that can be
              enhanced include, but are not limited to, clarity, depth,
              dynamics, and character.
            </p>
            <p className="xan-text">
              If you have a project that contains vocals/audio for podcasts,
              Youtube content, shows, etc. I can help bring your sound to a
              professional level.
            </p>
            <p className="xan-text">If you are interested, get in touch!</p>
            <div className="d-flex flex-center">
              <Fade bottom>
                <SmoothScrollButton
                  name="Contact"
                  color="white"
                  href="/xan-contact"
                />
              </Fade>
            </div>
          </Col>
          <Col md="12" lg="6" className="center-items">
            <img src={AudioIMG} className="audio-img" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
