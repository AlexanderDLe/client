import React from 'react';
import PortfolioGallery from './portfolio/PortfolioGallery';
import PortfolioIntro from './portfolio/PortfolioIntro';

export default () => {
  return (
    <div id="portfolio">
      <PortfolioIntro />
      <PortfolioGallery />
    </div>
  );
};
