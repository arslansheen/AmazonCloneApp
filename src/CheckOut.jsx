import React from 'react';
import './CheckOut.css';
export default function CheckOut(props) {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
            alt=""
          />
          <div className="checkout__title">
            <h2>Your Shopping Basket</h2>
          </div>
        </div>
        <div className="checkout__basket"></div>
      </div>
      <div className="checkout__right"></div>
    </div>
  );
}
