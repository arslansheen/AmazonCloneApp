import React from 'react';
import Product from './Product.jsx';
import './Body.css';
function Body(props) {
  return (
    <div className="body">
      <div className="body__container">
        <img
          className="home__image"
          style={{ border: '1px solid blue' }}
          src="https://m.media-amazon.com/images/I/81YSWfTFDbL._SX3000_.jpg"
          alt=""
        />
        <div className="body__row">
          <Product />
          <Product />
        </div>
        <div className="body__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="body__row"></div>
      </div>
    </div>
  );
}

export default Body;
