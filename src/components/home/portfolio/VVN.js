import React from 'react';
import { Container } from 'reactstrap';
import VVNimg from '../../../img/VVN Site.png';
import MyButton from '../../utility/MyButton';
export default () => {
  return (
    <div className="full-portfolio-page blueBG portfolio-container">
      <Container className="portfolio-page py-5">
        <div className="flex-item-img">
          <img src={VVNimg} className="portfolio-icon" alt="" />
        </div>
        <div className="py-5 center-items flex-item-text portfolio-text">
          <h1 className="OpenSans page-title text-center py-1">VVN</h1>
          <p className="lead text-align-left">
            A custom site developed for electronic artist VVN.
          </p>
          <p className="text-muted">
            This page features music, services, information, and artwork
            belonging to VVN. Responsive, detailed, and stylish - it perfectly
            suits her unique identity. Check it out.
          </p>
          <div className="m-2 row">
            <MyButton to={'/portfolio'} color={'black'} name={'Website'} />
            <MyButton to={'/portfolio'} color={'black'} name={'Code'} />
          </div>
        </div>
      </Container>
    </div>
  );
};
