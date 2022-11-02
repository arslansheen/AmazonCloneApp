import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Customer from '../Database/customer';
import axiotest from '../axio';
import { useStateValue } from '../StateProvider';
import BasketItem from './BasketItem';
import CurrencyFormat from 'react-currency-format';
import './Payment.css';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import Customer from '../Database/customer';

const Payment = () => {
  const [clientSecret, setClientSecret] = useState(false);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState({});
  const [{ user, basket }, dispatch] = useStateValue();
  function calculateTotalPrice() {
    return basket.reduce(
      (container, currentItem) => container + currentItem.price,
      0
    );
  }
  const totalPrice = calculateTotalPrice();
  function getClientsecret(totalPrice) {
    return axiotest({
      method: 'post',
      url: `/payments/create?total=${totalPrice * 100}`,
    }).then((response) => {
      if (response?.data?.clientSecret) return response.data.clientSecret;
      else {
        return Error('error occured');
      }
    });
  }
  useEffect(() => {
    //generate a special stripe secret which allows us to charge customers
    // (async () => {
    //   axiotest({
    //     method: 'post',
    //     //stripe accepts in a currencies subunits
    //     url: `/payments/create?total=${totalPrice * 100}`,
    //   })
    //     .then((response) => {
    //       setClientSecret(response.data.clientSecret);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //       // setStatus();
    //     });
    // })();
  }, [basket]);
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
                <button
                  className="buttonComponent"
                  type="submit"
                  disabled={status !== 'ok'}>
                  <span>{status === 'submit' ? 'Processing' : 'Buy Now'}</span>
                </button>
              </div>
              {status?.error ? status.error : ''}
            </form>
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
    setStatus('submit');

    getClientsecret(totalPrice).then(async (secret) => {
      if (typeof secret !== 'string') {
        window.alert('cannot connect to the server try again');
        setStatus('ok');
      }
      console.log('this is client secret>> ', secret);
      const payload = await stripe
        .confirmCardPayment(secret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          setStatus('succeeded');
          Customer.StorePaymentIntent({
            userId: user?.uid,
            paymentIntentID: paymentIntent.id,
            basket: basket,
            amount: totalPrice,
            createdDate: paymentIntent.created,
          });
          // dispatch({
          //   type: 'EMPTY_BASKET',
          // });
          navigate('/orders', true);
        })
        .catch((e) => {
          alert(e.message);
          setStatus('ok');
        });
    });
  }
};
export default Payment;
