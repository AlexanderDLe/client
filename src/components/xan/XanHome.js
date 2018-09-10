import React from 'react';
import XanLanding from './XanLanding';
import XanNav from './XanNav';
import XanAbout from './XanAbout';

export default () => {
  return (
    <div className="page xan-page bg-dark">
      <XanNav />
      <XanLanding />
      <XanAbout />
    </div>
  );
};
