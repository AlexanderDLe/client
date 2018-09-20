import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Fade } from 'react-reveal';
import SmoothScrollButton from '../utility/SmoothScrollButton';

export default () => {
  return (
    <div id="music" className="full-page center-items page-padding">
      <Container>
        <div className="musicHero-2" />
        <Row>
          <Col md="12" lg="6" className="center-items xan-text-light mb-5">
            <h1 className="xan-text-light OpenSans xan-title">AUDIO</h1>
            <hr className="hr-white" />
            <p className="xan-text">
              Audio engineering is the process in which one uses various tools
              such as equalizers, dynamic processors, saturators, etc. to
              manipulate audio to achieve higher quality sound. Aspects that can
              be enhanced include, but are not limited to, clarity, depth,
              dynamics, and character.
            </p>
            <p className="xan-text">
              If you have a project that contains vocals/audio for podcasts,
              Youtube content, shows, etc. I can help bring your sound to a
              professional level.
            </p>
            <p className="xan-text">
              If you have a project and are interested, get in touch!
            </p>
            <div className="d-flex flex-center">
              <Fade bottom>
                <SmoothScrollButton
                  name="Contact"
                  color="white"
                  href="/portfolio"
                />
              </Fade>
            </div>
          </Col>
          <Col md="12" lg="6" className="center-items">
            <iframe
              className="musicBox center-items"
              scrolling="no"
              height="400"
              frameborder="no"
              title="scPlayer"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/339157124&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
