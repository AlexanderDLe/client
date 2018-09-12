import React from 'react';
import { Col } from 'reactstrap';

export default props => {
  const { num } = props;
  return (
    <Col md="12" lg="6" className="portfolio-col center-items">
      <div className={`portfolio-gallery-item portfolio-gallery-item-${num}`}>
        <div className="portfolio-gallery-inner" />
      </div>
    </Col>
  );
};
