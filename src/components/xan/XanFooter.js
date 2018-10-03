import React from 'react';
import FBicon from '../../img/FB Icon.png';
import SCicon from '../../img/SC Icon.png';
import Ticon from '../../img/T Icon.png';
import IGicon from '../../img/IG Icon.png';
import OpenAnchorTag from '../utility/OpenAnchorTag';

export default () => {
  return (
    <footer className="footer-xan center-items-horizontally">
      <OpenAnchorTag
        img={SCicon}
        tag="footer"
        href="https://soundcloud.com/i-am-xan"
      />
      <OpenAnchorTag
        img={IGicon}
        tag="footer"
        href="https://www.instagram.com/xan.stagram/"
      />
      <OpenAnchorTag
        img={Ticon}
        tag="footer"
        href="https://twitter.com/XanOfTheLand"
      />
      <OpenAnchorTag
        img={FBicon}
        tag="footer"
        href="https://www.facebook.com/iamxanofficial/"
      />
    </footer>
  );
};
