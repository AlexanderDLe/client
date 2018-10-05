import React from 'react';
import XanLogo from '../../img/XanLogoLarge.png';

export default () => {
  return (
    <div id="xan-home" className="full-page xan-landing parallaxFX">
      <div className="dark-xan-overlay">
        <div className="xan-content center-items">
          <img src={XanLogo} className="xan-landing-logo" alt="" />
          <div className="xan-landing-div" />
        </div>
      </div>
    </div>
  );
};
