import * as React from 'react';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';

const HomePage = () => (
  <article className="home">
    <Hero />
    <Features />
    <Footer />
  </article>
);

export default HomePage;
