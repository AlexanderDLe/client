import React from 'react';
import XanLogo from '../../img/XanLogoLarge.png';

export default () => {
  return (
    <div id="xan-home" className="full-page xan-landing parallaxFX">
      <div className="dark-xan-overlay center-items">
        <img src={XanLogo} className="xan-landing-logo" alt="" />
      </div>
    </div>
  );
};
