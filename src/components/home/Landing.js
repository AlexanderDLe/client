import React from 'react';
import { Container } from 'reactstrap';
import MyButton from '../utility/MyButton';

export default () => {
  return (
    <div className="wrap landing-BG">
      <div className="dark-overlay">
        <Container className="land">
          <h1 className="OpenSans display-2 text-light font-weight-bold">
            Alexander Le
          </h1>
          <p className="lead text-light">
            Hi, I'm a Full Stack Developer with a focus on Front End. Welcome to
            my page.
          </p>
          <p className="text-light" />
          <MyButton to={'/portfolio'} name={'Portfolio'} color={'white'} />
        </Container>
      </div>
    </div>
  );
};
