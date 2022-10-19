import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
function SubTotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={500000000.8999}
        renderText={(value) => (
          <>
            <div>
              <div style={{ display: 'flex' }}>
                Subtotal (0 items ):
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
