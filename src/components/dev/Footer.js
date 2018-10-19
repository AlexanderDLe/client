import React from 'react';
import GHicon from '../../img/GH Icon.png';
import LIicon from '../../img/LI Icon.png';
import IGicon from '../../img/IG Icon.png';
import CPicon from '../../img/CP Icon.png';
import OpenAnchorTag from '../utility/OpenAnchorTag';

export default () => {
  return (
    <footer className="footer-portfolio center-items-horizontally">
      <OpenAnchorTag
        img={IGicon}
        tag="footer"
        href="https://www.instagram.com/xan.stagram/"
      />
      <OpenAnchorTag
        img={LIicon}
        tag="footer"
        href="https://www.linkedin.com/in/alexander-le-77a5bb160/"
      />
      <OpenAnchorTag
        img={GHicon}
        tag="footer"
        href="https://github.com/AlexanderDLe"
      />
      <OpenAnchorTag
        img={CPicon}
        tag="footer"
        href="https://codepen.io/AlexanderLeDev/"
      />
    </footer>
  );
};
