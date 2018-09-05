import React from 'react';
import { Container } from 'reactstrap';
import Lambadaimg from '../../../img/Lambada Site.png';
import MyButton from '../../utility/MyButton';

export default () => {
  return (
    <div className="full-portfolio-page greenBG portfolio-container">
      <Container className="portfolio-reverse-page py-5">
        <div className="flex-item-text reverse-item py-5 center-items portfolio-text">
          <h1 className="OpenSans page-title text-center py-1">Lambada</h1>
          <p className="lead">
            A bright and simplistic site for a welcoming boba shop.
          </p>
          <p className="text-muted">
            This friendly page features a full menu gallery, a sliding image
            carousel, information, and nice vibes. Fully responsive, quick, and
            easy to get the info you need - it's perfect for a boba shop.
          </p>
          <div className="m-2 row">
            <MyButton to={'/portfolio'} color={'black'} name={'Website'} />
            <MyButton to={'/portfolio'} color={'black'} name={'Code'} />
          </div>
        </div>
        <div className="flex-item-img">
          <img src={Lambadaimg} className="portfolio-icon" alt="" />
        </div>
      </Container>
    </div>
  );
};
