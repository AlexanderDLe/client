import React, { Component } from 'react';
import { Container } from 'reactstrap';

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
    if (window.scrollY > window.innerHeight - 16) {
      this.setState({
        iconColor: 'nav-black'
      });
    } else if (window.scrollY < window.innerHeight - 16) {
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
      <div className="navigation">
        <Container className="nav-container">
          <div
            onClick={this.toggleOnClick}
            className={`nav-icon ${toggle} ${iconColor}`}
          >
            <div className="hamburger" />
          </div>
        </Container>
      </div>
    );
  }
}
