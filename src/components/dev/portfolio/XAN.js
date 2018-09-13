import React from 'react';
import { Container } from 'reactstrap';
import XANimg from '../../../img/XAN Site.png';
import MyAnchorButton from '../../utility/MyAnchorButton';
import MyLinkButton from '../../utility/MyLinkButton';
import Fade from 'react-reveal';
import PortfolioGalleryImg from './PortfolioGalleryImg';

export default () => {
  return (
    <div className="portfolio-container">
      <Container>
        <Fade>
          <PortfolioGalleryImg img={XANimg} />
          <div className="center-items portfolio-text">
            <h1 className="OpenSans page-title text-center">XAN</h1>
            <hr />
            <p className="lead">
              My personal artist page for my music and interests.
            </p>
            <p className="text-muted-custom">
              My page for my musical alias, Xan. Features music, audio services,
              interests, and a bit of background.
            </p>
            <div className="m-2 row">
              <Fade bottom>
                <MyLinkButton to={'/artist'} color={'black'} name={'Website'} />
                <MyAnchorButton
                  href={'https://github.com/AlexanderDLe/XANTea'}
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
