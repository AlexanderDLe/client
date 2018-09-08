import React from 'react';
import VVNPage from './portfolio/VVN';
import LambadaPage from './portfolio/Lambada';
import XANPage from './portfolio/XAN';
import GRSIPage from './portfolio/GRSI';
import PortfolioIntro from './portfolio/PortfolioIntro';

export default () => {
  return (
    <div id="portfolio">
      <PortfolioIntro />
      <XANPage />
      <VVNPage />
      <LambadaPage />
      <GRSIPage />
    </div>
  );
};
