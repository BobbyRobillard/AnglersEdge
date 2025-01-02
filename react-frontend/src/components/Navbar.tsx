import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>Angler's Edge</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fish/1">FAQ</Link></li>
        <li><Link to="/fish/1">Resources</Link></li>
        <li><Link to="/fish/1">Donate</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
