import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default () => {
  return (
    <div>
      <h1>Landing</h1>
      <Link to="/portfolio">
        <Button className="btn btn-primary"> Portfolio </Button>
      </Link>
    </div>
  );
};
