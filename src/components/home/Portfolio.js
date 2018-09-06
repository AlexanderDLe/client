import React from 'react';
import VVNPage from './portfolio/VVN';
import LambadaPage from './portfolio/Lambada';
import XANPage from './portfolio/XAN';
import GRSIPage from './portfolio/GRSI';

export default () => {
  return (
    <div>
      <XANPage />
      <VVNPage />
      <LambadaPage />
      <GRSIPage />
    </div>
  );
};
