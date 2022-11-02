import React from 'react';
import { useStateValue } from '../StateProvider';
import './BasketItem.css';

function BasketItem({
  price,
  description,
  rating,
  imgSrc,
  buttonHidden = false,
}) {
  const [state, dipatch] = useStateValue();
  return (
    <div className="basketItem">
      <img src={imgSrc} alt="" />
      <div className="basketProduct__Details">
        <p>{description}</p>
        <p className="basketItem__price">
          <span className="dollar">$</span>
          <span className="price">{price}</span>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <span>⭐</span>;
            })}
        </div>
        {buttonHidden || (
          <button onClick={removeBaketItem}> Remove From Basket</button>
        )}
      </div>
    </div>
  );
  function removeBaketItem() {
    dipatch({
      type: 'REMOVE_FROM_BASKET',
      item: description,
    });
  }
  // return (
  //   <div className="basketItem">
  //     <img
  //       src="https://m.media-amazon.com/images/I/71YbMhc-JLL._AC_UL320_.jpg"
  //       alt=""
  //     />
  //     <div className="basketProduct__Details">
  //       <p>
  //         hi my dddddd ddddd dddddddddd name is arslan shankoor and im to tell
  //         you something thats more important to you
  //       </p>
  //       <p className="basketItem__price">$234</p>
  //       <div className="basketItem__rating">
  //         <span>⭐</span>
  //         <span>⭐</span>
  //         <span>⭐</span>
  //         <span>⭐</span>
  //         <span>⭐</span>
  //       </div>
  //       <button> Remove From Basket</button>
  //     </div>
  //   </div>
  // );
}

export default BasketItem;
