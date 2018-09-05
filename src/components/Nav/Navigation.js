import React from 'react';
import { Container } from 'reactstrap';

export default () => {
  return (
    <div className="navigation">
      <Container className="nav-container">
        <div className="nav-icon">
          <div className="hamburger" />
        </div>
      </Container>
    </div>
  );
};
