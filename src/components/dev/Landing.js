import React from 'react';
import { Container } from 'reactstrap';
import SmoothScrollButton from '../utility/SmoothScrollButton';
import Fade from 'react-reveal';

export default () => {
  return (
    <div id="home" className="wrap landing-BG parallaxFX">
      <div className="dark-overlay">
        <div className="landing-content">
          <Container className="land text-center">
            <h1 className="OpenSans landing-name text-light font-weight-bold">
              Alexander Le
            </h1>
            <p className="lead text-light">
              Hi, I'm a Full Stack Developer with a focus on Front End. Welcome
              to my page.
            </p>
            <div className="d-flex flex-center">
              <Fade bottom>
                <SmoothScrollButton
                  name="Explore"
                  color="white"
                  href="/portfolio"
                />
              </Fade>
            </div>
            <div className="landing-div" />
          </Container>
        </div>
      </div>
    </div>
  );
};
