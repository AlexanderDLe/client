import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="wrap landing-BG parallaxFX">
      <div className="dark-overlay">
        <Container className="land text-center">
          <h1 className="OpenSans display-2 text-light font-weight-bold">
            Alexander Le
          </h1>
          <p className="lead text-light">
            Hi, I'm a Full Stack Developer with a focus on Front End. Welcome to
            my page.
          </p>
          <Link to="/portfolio" className="my-button my-button-white">
            Explore
          </Link>
        </Container>
      </div>
    </div>
  );
};
