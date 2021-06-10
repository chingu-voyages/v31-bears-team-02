import * as React from 'react';
import './Features.css';

const Features = () => (
  <section className="features">
    <h2>Features</h2>
    <section>
      <h3>Play</h3>
      <p>Each artwork is a puzzle.</p>
    </section>
    <section>
      <h3>Explore</h3>
      <p>Take your time getting to know each piece of art.</p>
    </section>
    <section>
      <h3>Learn</h3>
      <p>
        With thousands of works from the met museum database
        you&apos;ll ther&apos;s plenty to learn and discover.
      </p>
    </section>
    <section>
      <img alt="placeholder" src="https://picsum.photos/500/400" />
    </section>
  </section>
);

export default Features;
