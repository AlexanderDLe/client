import React from 'react';
import { Container } from 'reactstrap';
import XANimg from '../../../img/XAN Site.png';
import MyButton from '../../utility/MyButton';
import MyLink from '../../utility/MyLink';

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
            When I'm not coding, I could be found with my girlfriend, making
            music, learning how to develop VR within Unreal Engine, or playing
            video games.
          </p>
          <div className="m-2 row">
            <MyLink to={'/artist'} color={'black'} name={'Website'} />
            <MyButton
              href={'https://github.com/AlexanderDLe/XANTea'}
              color={'black'}
              name={'Code'}
            />
          </div>
        </div>
        <div className="flex-item-img">
          <img src={XANimg} className="portfolio-icon shadowed" alt="" />
        </div>
      </Container>
    </div>
  );
};
