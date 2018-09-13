import React from 'react';

export default props => {
  const { name, color, href } = props;
  return (
    <div className="my-3">
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={`my-button-${name} m-2 text-center my-button my-button-${color} OpenSans`}
      >
        {name}
      </a>
    </div>
  );
};
