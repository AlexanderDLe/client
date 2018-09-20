import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavAnchorLink from '../utility/NavAnchorLink';

export default class XanNav extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
    this.toggleOnClick = this.toggleOnClick.bind(this);
  }

  toggleOnClick() {
    if (!this.state.toggle) {
      this.setState({
        toggle: 'active-X'
      });
    }
    if (this.state.toggle) {
      this.setState({
        toggle: false
      });
    }
  }

  render() {
    const { toggle } = this.state;

    return (
      <div className="">
        <Container className="nav-container">
          <div
            onClick={this.toggleOnClick}
            className={`nav-icon xan-nav-icon ${toggle}`}
          >
            <div className="hamburger" />
          </div>
        </Container>
        <div className={`nav-modal xan-nav-modal ${toggle}`}>
          <div className="xan-nav-lining" />
          <ul className={`nav-list xan-nav-list ${toggle}`}>
            <li className="nav-item mb-2">
              <NavLink
                to="/"
                activeClassName="active"
                onClick={this.toggleOnClick}
              >
                <h1>DEV</h1>
              </NavLink>
            </li>
            <NavAnchorLink
              name="Home"
              href="/xan-home"
              onClick={this.toggleOnClick}
            />

            <NavAnchorLink
              name="Music"
              href="/music"
              onClick={this.toggleOnClick}
            />
            <NavAnchorLink
              name="Audio"
              href="/audio"
              onClick={this.toggleOnClick}
            />
            <NavAnchorLink
              name="About"
              href="/xan-about-down"
              onClick={this.toggleOnClick}
            />
            <NavAnchorLink
              name="Contact"
              href="/xan-contact"
              onClick={this.toggleOnClick}
            />
          </ul>
        </div>
      </div>
    );
  }
}
