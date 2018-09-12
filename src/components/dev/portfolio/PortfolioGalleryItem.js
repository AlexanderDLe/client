import React from 'react';
import { Col } from 'reactstrap';

export default props => {
  const { num } = props;
  return (
    <Col lg="6" xl="3" className="portfolio-col center-items">
      <div className={`portfolio-gallery-item portfolio-gallery-item-${num}`}>
        <div className="portfolio-gallery-inner" />
      </div>
    </Col>
  );
};
