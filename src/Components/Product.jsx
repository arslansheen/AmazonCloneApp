import React from 'react';
import './Product.css';
const Product = (product) => {
  return (
    <>
      <div className="product">
        <div className="product__description">
          <p>{product.description}</p>
        </div>
        <div className="product__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </div>
        <div className="product__rating">
          {Array(product.rating)
            .fill()
            .map(() => (
              <span>⭐</span>
            ))}
        </div>
        <img src={product.imageSrc} alt="" />
        <button>Add to Basket</button>
      </div>
    </>
  );
};
export default Product;
