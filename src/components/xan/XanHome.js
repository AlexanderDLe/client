import React, { Component } from 'react';
import XanLanding from './XanLanding';
import XanNav from './XanNav';
import XanQuote from './XanQuote';
import XanMusic from './XanMusic';
import XanAudio from './XanAudio';
import XanAbout from './XanAbout';
import XanDown from './XanDown';
import XanUp from './XanUp';
import XanContact from './XanContact';
import XanFooter from './XanFooter';

class XanHome extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.resizeWindow = this.resizeWindow.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.resizeWindow);
    this.handleScroll();
  }

  handleScroll() {
    if (document.querySelector('.robert-frost-quote')) {
      let frostQuote = document.querySelector('.robert-frost-quote');
      let frostTop = window.scrollY - frostQuote.offsetTop;
      frostQuote.style.top = frostTop * -0.22 + -60 + 'px';
    }
    if (document.querySelector('.musicHero')) {
      let musicHero = document.querySelector('.musicHero');
      let musicHeroTop = window.scrollY - musicHero.offsetTop;
      musicHero.style.backgroundPositionY = musicHeroTop * -0.15 + 'px';
    }
    if (document.querySelector('.musicHero-2')) {
      let musicHero2 = document.querySelector('.musicHero-2');
      let musicHero2Top = window.scrollY - musicHero2.offsetTop;
      musicHero2.style.backgroundPositionY = musicHero2Top * -0.15 + 'px';
    }
  }
  resizeWindow() {
    if (document.querySelector('.robert-frost-quote')) {
      let frostQuote = document.querySelector('.robert-frost-quote');
      console.log(window.scrollY, frostQuote.offsetTop);
    }
  }

  render() {
    return (
      <div className="page xan-page bg-dark">
        <XanNav />
        <XanLanding />
        <XanQuote />
        <XanMusic />
        <XanAudio />
        <XanDown />
        <XanAbout />
        <XanUp />
        <XanContact />
        <XanFooter />
      </div>
    );
  }
}

export default XanHome;
