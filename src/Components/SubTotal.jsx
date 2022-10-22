import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  const subtotalPrice = basket.reduce((previous, current) => {
    return previous + current.price;
  }, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={subtotalPrice}
        renderText={(value) => (
          <>
            <div>
              <div style={{ display: 'flex' }}>
                Subtotal ({basket.length} items ):
                <strong style={{ display: 'inline' }}> {value}</strong>
              </div>
              <input type="checkbox" name="" id="" />
              <small>This order contains a gift</small>
            </div>
          </>
        )}
        decimalScale={2}
        thousandSeparator={true}
        prefix={'$'}
        displayType={'text'}
      />
      <button className="checkOut__proceedToCheckoutBtn">
        Proceed To Checkout
      </button>
    </div>
  );
}

export default SubTotal;
