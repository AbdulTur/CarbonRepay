// components/Header.js
import React from 'react';
import '../styles/Header.css';
import logo from './Logo.png'; // Update the path to your logo

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Carbon Repay Logo" className="logo" />
      {/* Remove the h1 element containing the writing */}
    </header>
  );
}

export default Header;
