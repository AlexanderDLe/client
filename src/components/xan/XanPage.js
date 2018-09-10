import React from 'react';
import XanLanding from './XanLanding';
import XanNav from './XanNav';
import XanAbout from './XanAbout';

export default () => {
  return (
    <div className="xan-page bg-dark">
      <XanNav />
      <XanLanding />
      <XanAbout />
    </div>
  );
};
