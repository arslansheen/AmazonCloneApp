import React from 'react';
import './Nav.css';
import ShoppingBasketIconx from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div className="header__nav">
      <div className="header__option">
        <span className="header__optionLineOne">Hello, Sigin</span>
        <span className="header__optionLineTwo">Accounts and Lists</span>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">
          <b>& Orders</b>
        </span>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">
          <b> Prime </b>
        </span>
      </div>
      <div className="shopping__baskedIcon">
        <Link to="/checkout">
          <ShoppingBasketIconx />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </Link>
      </div>
      {/* <ShoppingCart /> */}
    </div>
  );
}
