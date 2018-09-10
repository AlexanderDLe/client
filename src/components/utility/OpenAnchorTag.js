import React from 'react';

export default props => {
  const { href, onClick, img, tag } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      <img className={`${tag}-social-icon`} src={img} alt="" />
    </a>
  );
};
