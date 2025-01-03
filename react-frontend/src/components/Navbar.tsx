import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="/src/assets/Black-Transparent.png" // Replace with the actual path to your logo
            alt="Angler's Edge Logo"
            height="80" // Adjust the height as needed
          />
        </a>
        {/* Tabs */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/faq">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/locations">
              Locations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
