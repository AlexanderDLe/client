import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <Link to="/">
        <Button className="btn btn-primary"> Home </Button>
      </Link>
    </div>
  );
};
