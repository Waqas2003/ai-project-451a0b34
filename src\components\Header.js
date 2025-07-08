import React from 'react';
import './Header.css';

function Header({ onMenuToggle }) {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={onMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1>POS System</h1>
    </header>
  );
}

export default Header;