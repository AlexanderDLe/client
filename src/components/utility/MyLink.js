import React from 'react';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default props => {
  const { name, color, href } = props;

  return (
    <div className="my-3">
      <Fade bottom>
        <AnchorLink
          href={href}
          className={`my-button-${name} text-center my-button my-button-${color} OpenSans`}
        >
          {name}
        </AnchorLink>
      </Fade>
    </div>
  );
};
