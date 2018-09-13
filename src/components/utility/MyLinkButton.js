import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const { name, color, to } = props;
  return (
    <div className="my-3">
      <Link
        to={to}
        className={`my-button-${name} m-2 text-center my-button my-button-${color} OpenSans`}
      >
        {name}
      </Link>
    </div>
  );
};
