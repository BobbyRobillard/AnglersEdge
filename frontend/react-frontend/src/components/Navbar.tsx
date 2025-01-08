// Navbar.tsx
// This component represents the navigation bar of the application.
// It includes links to various sections of the site.

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="/src/assets/White-Transparent.png" // Replace with the actual path to your logo
            alt="Angler's Edge Logo"
            height="200" // Adjust the height as needed
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
            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="http://localhost:8001">
              Documentation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
