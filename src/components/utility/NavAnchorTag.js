import React from 'react';

export default props => {
  const { href, onClick, img } = props;

  return (
    <a
      className="mr-3"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <img className="nav-social-icon" src={img} alt="" />
    </a>
  );
};
