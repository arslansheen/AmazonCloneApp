import moment from 'moment/moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import BasketItem from './BasketItem';
import './Order.css';
const Order = ({ amount, created, basket, orderId }) => {
  return (
    <>
      <div className="order">
        <div className="order__id">
          <h3>Order:</h3>
          <small>{orderId}</small>
        </div>
        <div className="order__created">
          <p>Created:</p>
          {moment.unix(created).format('MMM Do YYYY, h:mma')}
        </div>
        {basket.map((item) => (
          <>
            <BasketItem
              buttonHidden={true}
              price={item.price}
              description={item.description}
              rating={item.rating}
              imgSrc={item.imgSrc}
            />
          </>
        ))}
        <CurrencyFormat
          value={amount}
          displayType="text"
          renderText={(amount) => (
            <div className="order__amount">
              <h2>Total Amount:</h2>
              <p>{amount}</p>
            </div>
          )}
          decimalScale={2}
          prefix="$"
          thousandSeparator={true}
        />
      </div>
    </>
  );
};
export default Order;
