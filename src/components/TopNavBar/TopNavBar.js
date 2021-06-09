import * as React from 'react';
import './TopNavBar.css';

const TopNavBar = () => (
  <header className="top-nav-header">
    <h2>ArtGuessr</h2>
    <nav>
      <ul>
        <li>
          Sign Up
        </li>
        <li>
          Sign in
        </li>
      </ul>
    </nav>
  </header>
);

export default TopNavBar;
