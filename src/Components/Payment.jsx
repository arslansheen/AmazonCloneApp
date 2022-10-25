import React from 'react';
import { useStateValue } from '../StateProvider';
import BasketItem from './BasketItem';
import './Payment.css';
const Payment = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Check Out ({basket?.length})</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <p>{user?.email || ''}</p>
          <p>123 React Lane</p>
          <p>Log Angeles,CA</p>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
            <div className="payment__items">
              {basket.map((item) => {
                return (
                  <BasketItem
                    description={item.description}
                    rating={item.rating}
                    price={item.price}
                    imgSrc={item.imgSrc}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title"></div>
          <h3>Payment Method</h3>
          <div className="payment__details">{/* Stripe  */}</div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
