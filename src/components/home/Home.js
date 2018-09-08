import React from 'react';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import PortfolioNavigation from '../nav/PortfolioNavigation';

export default () => {
  return (
    <div>
      <PortfolioNavigation />
      <Landing />
      <About />
      <Portfolio />
    </div>
  );
};
