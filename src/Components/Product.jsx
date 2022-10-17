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
      </div>
    </>
  );
};
export default Product;
