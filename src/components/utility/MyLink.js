import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class MyLink extends Component {
  render() {
    const { name, color, href } = this.props;
    return (
      <div className="my-3">
        <Fade>
          <AnchorLink
            href={href}
            className={`my-button-${name} text-center my-button my-button-${color} OpenSans`}
          >
            {name}
          </AnchorLink>
        </Fade>
      </div>
    );
  }
}
