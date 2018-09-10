import React from 'react';
import { Container } from 'reactstrap';
import MyLink from '../utility/MyLink';
import Fade from 'react-reveal';

export default () => {
  return (
    <div id="home" className="wrap landing-BG parallaxFX">
      <div className="dark-overlay">
        <Container className="land text-center">
          <h1 className="OpenSans landing-name text-light font-weight-bold">
            Alexander Le
          </h1>
          <p className="lead text-light">
            Hi, I'm a Full Stack Developer with a focus on Front End. Welcome to
            my page.
          </p>
          <div className="d-flex flex-center">
            <Fade bottom>
              <MyLink name="Explore" color="white" href="/portfolio" />
            </Fade>
          </div>
        </Container>
      </div>
    </div>
  );
};