import React from 'react';
import { useStateValue } from '../StateProvider';
import BasketItem from './BasketItem';
import './CheckOut.css';
import SubTotal from './SubTotal';

export default function CheckOut(props) {
  const [{ basket }, dipatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
            alt=""
          />
          {basket.length > 0 && (
            <div className="checkout__right">
              <SubTotal />
            </div>
          )}
        </div>
        <div className="checkout__title">
          {basket.length > 0 ? (
            <h2>Your Shopping Basket</h2>
          ) : (
            <h2>Your Shopping Basket is Empty</h2>
          )}
        </div>
        {basket.map((product) => (
          <BasketItem
            description={product.description}
            imgSrc={product.imgSrc}
            rating={product.rating}
            price={product.price}
          />
        ))}
        {/* <BasketItem />
        <BasketItem /> */}
      </div>
    </div>
  );
}
