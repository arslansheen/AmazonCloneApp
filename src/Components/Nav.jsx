import React from 'react';
import './Nav.css';
import ShoppingBasketIconx from '@mui/icons-material/ShoppingBasket';
import { Link, NavLink } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
export default function Nav() {
  const [state, dispatch] = useStateValue();
  const basketItemsCount = state.basket.length;
  return (
    <div className="header__nav">
      <div className="header__option">
        <Link to="/login" activeClassName="test" exact>
          <span className="header__optionLineOne">Hello, Sigin</span>
        </Link>
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
          <span className="header__optionLineTwo header__basketCount">
            {basketItemsCount}
          </span>
        </Link>
      </div>
      {/* <ShoppingCart /> */}
    </div>
  );
}
