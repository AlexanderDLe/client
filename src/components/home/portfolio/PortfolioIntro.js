import React from 'react';
import { Container } from 'reactstrap';
import Abilities from './Abilities';

export default () => {
  return (
    <div className="portfolio-intro greyBG center-items">
      <Container className="conditional-padding">
        <h1 className="OpenSans font-weight-bold page-title text-center ">
          PORTFOLIO
        </h1>
        <hr />
        <p className="lead text-center">
          Below are the various projects I've built.
        </p>
        <p className="text-muted centered-text">
          I'm fluent in the latest versions of fundamental web technologies such
          as HTML5, CSS3, and JavaScript. I utilize popular front end frameworks
          and libraries such as Bootstrap 4, Sass, React & Redux to create quick
          single page applications aligned with modern trends.
        </p>
        <br />
        <p className="text-muted centered-text">
          As for back end technologies, I am familiar with the MERN back end -
          i.e. Node, Express, and MongoDB. I have created created Restful APIs
          that allow users to securely communicate with servers and databases.
        </p>
      </Container>
      <Abilities />
    </div>
  );
};
