import React from 'react';

export default props => {
  const { img } = props;
  return (
    <div className="text-center">
      <img src={img} className="portfolio-image shadowed" alt="" />
    </div>
  );
};
