import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import GithubIcon from '../../img/Github.png';
import LinkedInIcon from '../../img/LinkedIn.png';
import XanNavLogo from '../../img/Xan Resized.jpg';
import NavAnchorLink from '../utility/NavAnchorLink';

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      iconColor: ''
    };
    this.toggleOnClick = this.toggleOnClick.bind(this);
    this.handleScroll = debounce(this.handleScroll.bind(this), 15);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  handleScroll(e) {
    if (window.scrollY > window.innerHeight - 35) {
      this.setState({
        iconColor: 'nav-black'
      });
    } else if (window.scrollY < window.innerHeight - 35) {
      this.setState({
        iconColor: ''
      });
    }
  }

  toggleOnClick() {
    if (!this.state.toggle) {
      this.setState({
        toggle: 'active'
      });
    }
    if (this.state.toggle) {
      this.setState({
        toggle: false
      });
    }
  }

  render() {
    const { toggle, iconColor } = this.state;

    return (
      <div className="">
        <Container className="nav-container">
          <div
            onClick={this.toggleOnClick}
            className={`nav-icon ${toggle} ${iconColor}`}
          >
            <div className="hamburger" />
          </div>
        </Container>
        <div className={`nav-modal ${toggle}`}>
          <ul className={`nav-list ${toggle}`}>
            <li className="nav-item">
              <Link to="/artist" onClick={this.toggleOnClick}>
                <img src={XanNavLogo} className="xan-nav-logo" alt="" />
              </Link>
            </li>
            <NavAnchorLink
              name="Home"
              href="/home"
              onClick={this.toggleOnClick}
            />
            <NavAnchorLink
              name="About"
              href="/about"
              onClick={this.toggleOnClick}
            />
            <NavAnchorLink
              name="Portfolio"
              href="/portfolio"
              onClick={this.toggleOnClick}
            />
            <NavAnchorLink
              name="Contact"
              href="/contact"
              onClick={this.toggleOnClick}
            />

            <li className="mt-3">
              <a
                className="mr-3"
                href="https://github.com/AlexanderDLe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="nav-social-icon" src={GithubIcon} alt="" />
              </a>
              <a className="" to="/">
                <img className="nav-social-icon" src={LinkedInIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
