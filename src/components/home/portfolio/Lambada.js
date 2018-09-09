import React from 'react';
import { Container } from 'reactstrap';
import Lambadaimg from '../../../img/Lambada Site.png';
import MyButton from '../../utility/MyButton';
import Fade from 'react-reveal';

export default () => {
  return (
    <div className="full-portfolio-page greenBG portfolio-container">
      <Container className="portfolio-reverse-page py-5">
        <div className="flex-item-text reverse-item py-5 center-items portfolio-text">
          <h1 className="OpenSans page-title text-center ">LAMBADA</h1>
          <hr />
          <p className="lead">A simplistic site for a sweet boba shop.</p>
          <p className="text-muted-custom">
            This friendly page features a full menu gallery, a sliding image
            carousel, information, and nice vibes. Fully responsive, quick, and
            easy to get the info you need - it's perfect for a boba shop.
          </p>
          <div className="m-2 row">
            <Fade bottom>
              <MyButton
                href={'https://github.com/AlexanderDLe/LambadaTea'}
                color={'black'}
                name={'Website'}
              />
              <MyButton
                href={'https://github.com/AlexanderDLe/LambadaTea'}
                color={'black'}
                name={'Code'}
              />
            </Fade>
          </div>
        </div>
        <div className="flex-item-img">
          <img src={Lambadaimg} className="portfolio-icon shadowed" alt="" />
        </div>
      </Container>
    </div>
  );
};
