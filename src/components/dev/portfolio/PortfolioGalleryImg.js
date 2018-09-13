import React from 'react';

export default props => {
  const { img } = props;
  return (
    <div className="flex-item-img text-center">
      <img src={img} className="portfolio-icon shadowed" alt="" />
    </div>
  );
};
