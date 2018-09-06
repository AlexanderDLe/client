import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const { name, color, to } = props;
  return (
    <Link
      to={to}
      className={`py-2 m-2 text-center my-button my-button-${color} OpenSans`}
    >
      {name}
    </Link>
  );
};
