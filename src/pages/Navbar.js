import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">🎁 Gift Hamper</div>
    <div className="navbar-links">
      <Link to="/occasion">🎉 Occasion</Link>
      <Link to="/box">📦 Boxes</Link>
      <Link to="/items">🧺 Items</Link>
      <Link to="/summary">📝 Summary</Link>
    </div>
  </nav>
);

export default Navbar;