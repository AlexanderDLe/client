import React from 'react';
import XanLanding from './XanLanding';
import XanNav from './XanNav';
import XanQuote from './XanQuote';

export default () => {
  return (
    <div className="page xan-page bg-dark">
      <XanNav />
      <XanLanding />
      <XanQuote />
    </div>
  );
};
