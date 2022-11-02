import { Unsubscribe } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import Customer from '../Database/customer';
import { useStateValue } from '../StateProvider';
import Order from './Order';
import './orders.css';
const Orders = () => {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState('');
  useEffect(() => {
    // let unSub;
    const unSubscripeToNewOrders = Customer.getOrders(
      user?.uid || 'DxcXobA7WlNIZUjFZkgnoQzfDkw2',
      setOrders
    );
    //   (data) => {
    //     // console.log(data.orders);
    //     setOrders(data.orders);
    //     // data.unSubscribe();
    //   }
    // );
    return () => unSubscripeToNewOrders();
  }, []);
  return (
    <div className="orders">
      <h2>Your Orders</h2>
      {/* {orders ? console.log(orders) : console.log('null')} */}
      {orders &&
        orders?.map((order) => (
          <>
            {order && console.log(order)}
            <Order
              amount={order.data.amount}
              created={order.data.created}
              basket={order.data.basket}
              orderId={order.id}
            />
          </>
        ))}
    </div>
  );
};
export default Orders;
