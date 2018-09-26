import React from 'react';
import { Container } from 'reactstrap';
import VVNimg from '../../../img/VVN Site.png';
import MyAnchorButton from '../../utility/MyAnchorButton';
import Fade from 'react-reveal';
import PortfolioGalleryImg from './PortfolioGalleryImg';

export default () => {
  return (
    <div className="portfolio-container">
      <Container>
        <Fade>
          <PortfolioGalleryImg img={VVNimg} />
          <div className="center-items portfolio-text centered-text">
            <h1 className="OpenSans page-title text-center">VVN</h1>
            <hr />
            <p className="lead text-align-left">
              A custom site developed for electronic artist VVN.
            </p>
            <p className="text-muted-custom">
              This page features music, services, information, and artwork
              belonging to VVN. Responsive, detailed, and stylish - it perfectly
              suits her unique identity. Check it out.
            </p>
            <div className="m-2 row">
              <Fade bottom>
                <MyAnchorButton
                  href={'http://xanofficial.com/vvn/'}
                  color={'black'}
                  name={'Website'}
                />
                <MyAnchorButton
                  href={'https://github.com/AlexanderDLe/VVNSite'}
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
