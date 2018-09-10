import React from 'react';
import XanLogo from '../../img/XanLogoLarge.png';

export default () => {
  return (
    <div className="full-page xan-landing">
      <div className="dark-xan-overlay center-items">
        <img src={XanLogo} className="xan-landing-logo" alt="" />
      </div>
    </div>
  );
};
