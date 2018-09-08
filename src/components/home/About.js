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
    <div id="about" className="half-page about-page">
      <Container className="">
        <h1 className="page-title text-center">ABOUT</h1>
        <hr />
        <Row className="py-3">
          <Col md="12" xl="6" className="center-items">
            <img src={IMBATMAN} className="MyIMG" alt="" />
          </Col>
          <Col md="12" xl="6" className="center-items">
            <div className="about-text">
              <p className="lead">
                I'm a full stack web developer with experience developing sites
                for businesses ranging from small shops to construction
                enterprises.
              </p>
              <p className="text-muted">
                I'm fluent in the latest versions of fundamental web
                technologies such as HTML5, CSS3, and JavaScript. I utilize
                popular front end frameworks and libraries such as Bootstrap 4,
                Sass, React & Redux to create single page applications aligned
                with modern trends.
              </p>
              <p className="text-muted">
                As for back end technologies, I can create CRUD Applications for
                interactive content. I have experience with Node, Express, and
                MongoDB creating Rest APIs that allow users to securely
                communicate with servers and databases.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
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
