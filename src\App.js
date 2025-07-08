import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <div className="app">
      <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <Sidebar menuOpen={menuOpen} />
      <Dashboard />
    </div>
  );
}

export default App;