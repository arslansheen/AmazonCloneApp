import React from 'react';
import './Header.css';
import DeliverTo from './DeliverTo.jsx';
import Logo from './Logo.jsx';
import SearchBar from './SearchBar.jsx';
import Nav from './Nav.jsx';
export default function Header() {
  return (
    <div className="header">
      <Logo />
      <DeliverTo />
      <SearchBar />
      <Nav />
    </div>
  );
}
