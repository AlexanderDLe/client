import React, { Component } from 'react';

class XanQuote extends Component {
  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
    this.resizeWindow = this.resizeWindow.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.resizeWindow);
    this.handleScroll();
  }

  handleScroll() {
    let frostQuote = document.querySelector('.robert-frost-quote');
    let frostTop = window.scrollY - frostQuote.offsetTop;
    frostQuote.style.top = frostTop * -0.22 + -50 + 'px';
    console.log(window.scrollY, frostQuote.offsetTop);
  }
  resizeWindow() {
    let frostQuote = document.querySelector('.robert-frost-quote');
    console.log(window.scrollY, frostQuote.offsetTop);
  }

  render() {
    return (
      <div
        id="xan-quote"
        className="full-page text-center xan-text-light center-items"
      >
        <div className="robert-frost-quote OpenSans">
          <p className="lead OpenSans">
            "To learn to write is to learn to have ideas"
          </p>
          <p className="lead OpenSans">- Robert Frost</p>
        </div>
      </div>
    );
  }
}
export default XanQuote;
