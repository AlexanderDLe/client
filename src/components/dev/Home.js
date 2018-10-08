import React, { Component } from 'react';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import DevNav from './DevNav';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }
  handleScroll() {
    if (document.querySelector('.parallaxFX')) {
      let parallaxFX = document.querySelector('.parallaxFX');
      parallaxFX.style.backgroundPositionY = window.scrollY * 0.25 + 'px';
    }
  }
  render() {
    return (
      <div className="page">
        <DevNav />
        <Landing />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
