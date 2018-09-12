import React from 'react';
import { Container } from 'reactstrap';
import GRSIimg from '../../../img/GRSI Site.png';
import MyButton from '../../utility/MyButton';
import Fade from 'react-reveal';

export default () => {
  return (
    <div className="portfolio-container">
      <Container>
        <div className="flex-item-img text-center">
          <img src={GRSIimg} className="portfolio-icon shadowed" alt="" />
        </div>
        <div className="py-5 center-items flex-item-text portfolio-text">
          <h1 className="OpenSans page-title text-center">GRSI</h1>
          <hr />
          <p className="lead text-align-left">
            An interactive demo site for GRSI.
          </p>
          <p className="text-muted-custom">
            A multi-featured site that has interactive elements including a
            login system with secure authentication, an API that allows
            modification of the database to edit the testimonial page, a contact
            form that requires valid fields, and more. Check out the README.md
            in the github repository to learn more about the details.
          </p>
          <div className="m-2 row">
            <Fade bottom>
              <MyButton
                href={'https://github.com/AlexanderDLe/GRSI'}
                color={'black'}
                name={'Website'}
              />
              <MyButton
                href={'https://github.com/AlexanderDLe/GRSI'}
                color={'black'}
                name={'Code'}
              />
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};
