import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default props => {
  const { name, color, href } = props;
  return (
    <div className="my-3">
      <AnchorLink
        href={href}
        className={`my-button-${name} text-center my-button my-button-${color} OpenSans`}
      >
        {name}
      </AnchorLink>
    </div>
  );
};
