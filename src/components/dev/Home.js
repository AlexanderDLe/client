import React from 'react';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import DevNav from './DevNav';

export default () => {
  return (
    <div className="page">
      <DevNav />
      <Landing />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
