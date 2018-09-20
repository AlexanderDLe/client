import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div id="music" className="full-page center-items page-padding">
      <Container>
        <div className="musicHero-2" />
        <Row>
          <Col md="12" lg="6" className="center-items text-light mb-5">
            <h1 className="text-light OpenSans xan-title">AUDIO</h1>
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
            <p className="xan-text">
              No matter where you are in life. There will always be a place for
              music and art.
            </p>
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
