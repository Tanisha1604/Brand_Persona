import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Services from '../Services';
import Pricing from '../Pricing';
import Results from '../Results';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Results />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
