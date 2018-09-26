import React from 'react';
import { Container } from 'reactstrap';
import GRSIimg from '../../../img/GRSI Site.png';
import MyAnchorButton from '../../utility/MyAnchorButton';
import Fade from 'react-reveal';
import PortfolioGalleryImg from './PortfolioGalleryImg';

export default () => {
  return (
    <div className="portfolio-container">
      <Container>
        <Fade>
          <PortfolioGalleryImg img={GRSIimg} />
          <div className="center-items portfolio-text centered-text">
            <h1 className="OpenSans page-title text-center">GRSI</h1>
            <hr />
            <p className="lead text-align-left">
              An interactive demo site for GRSI.
            </p>
            <p className="text-muted-custom">
              A multi-featured site that has interactive elements including a
              login system with secure authentication, an API that allows
              modification of the database to edit the testimonial page, a
              contact form that requires valid fields, and more. Check out the
              README.md in the github repository to learn more about the
              details.
            </p>
            <div className="m-2 row">
              <Fade bottom>
                <MyAnchorButton
                  href={'https://github.com/AlexanderDLe/GRSI'}
                  color={'black'}
                  name={'Website'}
                />
                <MyAnchorButton
                  href={'https://github.com/AlexanderDLe/GRSI'}
                  color={'black'}
                  name={'Code'}
                />
              </Fade>
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  );
};
