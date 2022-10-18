import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
export default function Logo() {
  return (
    <Link to="/" className="header__logoLink">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
    </Link>
  );
}
