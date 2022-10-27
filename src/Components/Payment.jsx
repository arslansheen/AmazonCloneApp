import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import BasketItem from './BasketItem';
import CurrencyFormat from 'react-currency-format';
import './Payment.css';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
const Payment = () => {
  const [disabled, setDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [status, setStatus] = useState({});
  const [{ user, basket }, dispatch] = useStateValue();
  const totalPrice = basket.reduce(
    (container, currentItem) => container + currentItem.price,
    0
  );
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Check Out
          <Link to="/checkout"> ({basket?.length} items)</Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email || ''}</p>
            <p>123 React Lane</p>
            <p>Log Angeles,CA</p>
          </div>
        </div>
        <div className="payment__section ">
          <div>
            <h3>Review Items and delivery</h3>
            <div className="payment__customSection">
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
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleOnSumit}>
              <CardElement onChange={handleOnChange} />
            </form>
            <div className="payment__priceContainer">
              <CurrencyFormat
                value={totalPrice}
                renderText={(value) => (
                  <>
                    <h3>Order Total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                displayType={'text'}
                thousandSeparator={true}
                prefix="$"
              />
              <button disabled={status !== 'ok'}>
                <span>{status === 'submit' ? 'Processing' : 'Buy Now'}</span>
              </button>
            </div>
            {status?.error ? status.error : ''}
          </div>
        </div>
      </div>
    </div>
  );
  function handleOnChange(e) {
    if (e.empty) {
      setStatus(e.empty ? 'empty' : 'ok');
    } else if (e?.error) {
      setStatus(e?.error ? { error: e.error.message } : 'ok');
    } else {
      setStatus('ok');
    }
  }
  async function handleOnSumit(e) {
    e.preventDefault();
    console.log('buy button clicked');
    setStatus('submit');
  }
};
export default Payment;
