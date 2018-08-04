import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const { to, name, color } = props;
  return (
    <Link to={to} className={`my-button my-button-${color} OpenSans`}>
      {name}
    </Link>
  );
};
