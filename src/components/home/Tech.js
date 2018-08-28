import React from 'react';
import { Container } from 'reactstrap';
import Bootstrap4 from '../../img/Bootstrap4.png';
import CSS3 from '../../img/CSS3.png';
import HTML5 from '../../img/HTML5.png';
import JavaScript from '../../img/JavaScript.png';
import Sass from '../../img/Sass.png';
import ReactIcon from '../../img/React.png';

export default () => {
  return (
    <div className="half-page">
      {/* <h1 className="py-5 text-center">Technologies</h1> */}
      <Container>
        <div className="tech-box">
          <img src={Bootstrap4} alt="" className="tech-icon" />
          <img src={CSS3} alt="" className="tech-icon" />
          <img src={HTML5} alt="" className="tech-icon" />
          <img src={ReactIcon} alt="" className="tech-icon" />
          <img src={Sass} alt="" className="tech-icon" />
          <img src={JavaScript} alt="" className="tech-icon" />
          <img src={Bootstrap4} alt="" className="tech-icon" />
          <img src={CSS3} alt="" className="tech-icon" />
          <img src={HTML5} alt="" className="tech-icon" />
          <img src={ReactIcon} alt="" className="tech-icon" />
          <img src={Sass} alt="" className="tech-icon" />
          <img src={JavaScript} alt="" className="tech-icon" />
        </div>
      </Container>
    </div>
  );
};
