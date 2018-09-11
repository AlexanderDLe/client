import React from 'react';
import { Container } from 'reactstrap';
import XANimg from '../../../img/XAN Site.png';
import MyButton from '../../utility/MyButton';
import MyLink from '../../utility/MyLink';
import Fade from 'react-reveal';

export default () => {
  return (
    <div className="full-portfolio-page redBG portfolio-container">
      <Container className="portfolio-reverse-page py-5">
        <div className="flex-item-text reverse-item py-5 center-items portfolio-text">
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
              <MyLink href={'/artist'} color={'black'} name={'Website'} />
              <MyButton
                href={'https://github.com/AlexanderDLe/XANTea'}
                color={'black'}
                name={'Code'}
              />
            </Fade>
          </div>
        </div>
        <div className="flex-item-img">
          <img src={XANimg} className="portfolio-icon shadowed" alt="" />
        </div>
      </Container>
    </div>
  );
};
