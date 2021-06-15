import * as React from "react";
import "./TopNavBar.css";
import { Link } from "react-router-dom";

const TopNavBar = () => (
  <header className="top-nav-header">
    <h2>ArtGuessr</h2>

    <nav>
      <ul>
        <li>
          <Link to="/game">Play</Link>
        </li>
        <li>Sign Up</li>
        <li>Sign in</li>
      </ul>
    </nav>
  </header>
);

export default TopNavBar;
