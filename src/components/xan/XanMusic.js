import React from 'react';
import { Container } from 'reactstrap';

export default () => {
  return (
    <div id="music" className="full-page page-padding">
      <Container className="center-items">
        <div className="musicHero musicHero-1" />
        <h1 className="xan-text-light OpenSans xan-title">MUSIC</h1>
        <hr className="hr-white mb-5" />
        <iframe
          className="musicBox center-items"
          scrolling="no"
          height="400"
          frameborder="no"
          title="scPlayer"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/339157124&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
      </Container>
    </div>
  );
};
