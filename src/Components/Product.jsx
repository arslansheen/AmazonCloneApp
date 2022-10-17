import React from 'react';
import './Product.css';
const Product = () => {
  return (
    <>
      <div className="product">
        <div className="product__description">
          <p>this is that product</p>
        </div>
        <div className="product__price">
          <small>$</small>
          <strong>50</strong>
        </div>
        <div className="product__rating"></div>
        <p className="rating">⭐</p>
        <img
          src="https://m.media-amazon.com/images/I/71YbMhc-JLL._AC_UL320_.jpg"
          alt=""
        />
        <button>Add to Basket</button>
      </div>
    </>
  );
};
export default Product;
