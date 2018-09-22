import React from 'react';
import { Container } from 'reactstrap';
import Abilities from './Abilities';

export default () => {
  return (
    <div className="portfolio-intro page-padding center-items">
      <Container className="conditional-padding mb-4">
        <h1 className="OpenSans font-weight-bold page-title text-center ">
          PORTFOLIO
        </h1>
        <hr className="" />
        <p className="lead text-center">
          Below are the various projects I've built.
        </p>
        <p className="text-muted centered-text">
          I'm fluent in the latest versions of fundamental web technologies such
          as HTML5, CSS3, and JavaScript. I utilize frameworks and libraries
          such as Bootstrap 4, Sass, React & Redux, etc. to create quick single
          page applications aligned with modern trends.
        </p>
        <br />
        <p className="text-muted centered-text">
          While my current front end library of choice is React as I really
          enjoy its component-based development methodology, overall speed,
          flexibility, and developer ecosystem - I open completely open to
          learning new or different frameworks/libraries if necessary for the
          job. My aim is to broaden my scope of knowledge and skills to improve
          my overall ability as a developer.
        </p>
        <br />
        <p className="text-muted centered-text">
          As for back end/full-stack technologies, I am familiar with the MERN
          stack - i.e. Node, Express, React, and MongoDB. I have created created
          Restful APIs that allow users to securely communicate with servers and
          databases.
        </p>
      </Container>
      <Abilities />
    </div>
  );
};
