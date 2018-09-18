import React, { Component } from 'react';
import XanLanding from './XanLanding';
import XanNav from './XanNav';
import XanQuote from './XanQuote';
import XanMusic from './XanMusic';

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
      console.log(window.scrollY, frostQuote.offsetTop);
    }
    if (document.querySelector('.musicHero')) {
      let musicHero = document.querySelector('.musicHero');
      let musicHeroTop = window.scrollY - musicHero.offsetTop;
      musicHero.style.backgroundPositionY = musicHeroTop * -0.15 + 'px';
      console.log(window.scrollY, musicHero.offsetTop);
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
      </div>
    );
  }
}

export default XanHome;
