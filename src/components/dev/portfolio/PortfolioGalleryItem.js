import React from 'react';
import { Col } from 'reactstrap';

export default props => {
  const { num, onClick } = props;
  return (
    <Col sm="6" lg="6" xl="3" className="portfolio-col center-items">
      <div
        onClick={onClick}
        className={`portfolio-gallery-item portfolio-gallery-item-${num}`}
      >
        <div className="portfolio-gallery-inner">
          <div className="portfolio-gallery-inner-text lead OpenSans">VIEW</div>
        </div>
      </div>
    </Col>
  );
};
