import * as React from 'react';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import HowTo from '../HowTo';

const HomePage = () => (
  <article className="home">
    <Hero />
    <Features />
    <HowTo />
    <Footer />
  </article>
);

export default HomePage;
