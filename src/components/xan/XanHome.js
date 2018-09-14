import React from 'react';
import XanLanding from './XanLanding';
import XanNav from './XanNav';
import XanQuote from './XanQuote';
import XanMusic from './XanMusic';

export default () => {
  return (
    <div className="page xan-page bg-dark">
      <XanNav />
      <XanLanding />
      <XanQuote />
      <XanMusic />
    </div>
  );
};
