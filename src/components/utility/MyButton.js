import React from 'react';

export default props => {
  const { name, color, href } = props;
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={`m-2 text-center my-button my-button-${color} OpenSans`}
    >
      {name}
    </a>
  );
};
