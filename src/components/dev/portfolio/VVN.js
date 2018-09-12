import React from 'react';
import { Container } from 'reactstrap';
import VVNimg from '../../../img/VVN Site.png';
import MyButton from '../../utility/MyButton';
import Fade from 'react-reveal';

export default () => {
  return (
    <div className="portfolio-container">
      <Container>
        <div className="flex-item-img text-center">
          <img src={VVNimg} className="portfolio-icon shadowed" alt="" />
        </div>
        <div className="py-5 center-items flex-item-text portfolio-text">
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
              <MyButton
                href={'http://www.vvnzquan.com/'}
                color={'black'}
                name={'Website'}
              />
              <MyButton
                href={'https://github.com/AlexanderDLe/VVNSite'}
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
