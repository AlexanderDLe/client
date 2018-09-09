import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default props => {
  const { href, name, onClick } = props;

  return (
    <li className="nav-item">
      <AnchorLink href={href} onClick={onClick}>
        {name}
      </AnchorLink>
    </li>
  );
};
