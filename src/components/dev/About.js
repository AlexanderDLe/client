import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Bootstrap4 from '../../img/Bootstrap4.png';
import CSS3 from '../../img/CSS3.png';
import HTML5 from '../../img/HTML5.png';
import JavaScript from '../../img/JavaScript.png';
import Sass from '../../img/Sass.png';
import ReactIcon from '../../img/React.png';
import Express from '../../img/Express.png';
import Node from '../../img/Node.png';
import Redux from '../../img/Redux.png';
import MongoDB from '../../img/MongoDB.png';
import IMBATMAN from '../../img/IMBATMAN.jpg';

export default () => {
  return (
    <div id="about" className="about-page page-padding center-items">
      <Container className="">
        <Row className="py-3">
          <Col md="12" xl="6" className="center-items">
            <h1 className="page-title">ABOUT</h1>
            <hr className="" />
            <div className="about-text">
              <p className="lead text-center">
                Web developer based in Garden Grove, California.
              </p>
              <p className="text-muted">
                I'm a lifelong hard working self-learner with a passion for
                animation, intuitive UI/UX, and buildin' stuff. I'm always
                willing and striving to learn new things to improve my skills.
              </p>
              <p className="text-muted">
                I would love to be in a challenging environment where I'm always
                learning new things and broadening the scope of my knowledge and
                experience. I value being humble and keeping an open mind.
              </p>
              <p className="text-muted">
                When I'm not coding, you can find me making music, gaming,
                hitting the gym, or chilling with my cat. Recently I've started
                learning how to develop for Virtual Reality via Unreal Engine.
              </p>
            </div>
          </Col>
          <Col md="12" xl="6" className="center-items py-5">
            <img src={IMBATMAN} className="MyIMG" alt="" />
          </Col>
        </Row>
        <Row className="pt-5 d-none">
          <div className="tech-box m-auto">
            <img src={HTML5} alt="" className="tech-icon" />
            <img src={CSS3} alt="" className="tech-icon" />
            <img src={JavaScript} alt="" className="tech-icon" />
            <img src={Bootstrap4} alt="" className="tech-icon" />
            <img src={Sass} alt="" className="tech-icon" />
            <img src={ReactIcon} alt="" className="tech-icon" />
            <img src={Redux} alt="" className="tech-icon" />
            <img src={Node} alt="" className="tech-icon" />
            <img src={Express} alt="" className="tech-icon" />
            <img src={MongoDB} alt="" className="tech-icon" />
            {/* <img src={Github} alt="" className="tech-icon" /> */}
          </div>
        </Row>
      </Container>
    </div>
  );
};
