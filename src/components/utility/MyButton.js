import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class MyButton extends Component {
  render() {
    const { name, color, href } = this.props;
    return (
      <div className="my-3">
        <Fade bottom>
          <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className={`my-button-${name} m-2 text-center my-button my-button-${color} OpenSans`}
          >
            {name}
          </a>
        </Fade>
      </div>
    );
  }
}
