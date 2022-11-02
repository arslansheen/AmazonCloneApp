import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import Button from './Button';
import './Product.css';
const Product = (product) => {
  const [state, dispatch] = useStateValue();
  function addToBasket() {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        description: product.description,
        price: product.price,
        rating: product.rating,
        imgSrc: product.imageSrc,
      },
    });
  }
  return (
    <>
      <div className="product">
        <div className="product__description">
          <p>{product.description}</p>
        </div>
        <div className="product__price">
          <small>$</small>
          <strong className="price">{product.price}</strong>
        </div>
        <div className="product__rating">
          {Array(product.rating)
            .fill()
            .map(() => (
              <span>⭐</span>
            ))}
        </div>
        <img src={product.imageSrc} alt="" />
        {/* <button onClick={addToBasket}>Add to Basket</button> */}
        <Button onClick={addToBasket} text={'Add to Basket'} />
      </div>
    </>
  );
};
export default Product;
