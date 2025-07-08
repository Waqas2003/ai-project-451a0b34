import React from 'react';
import './Sidebar.css';

function Sidebar({ menuOpen }) {
  return (
    <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Orders</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Customers</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;