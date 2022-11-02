import React from 'react';
import Product from './Product.jsx';
import backgroudImage from '../images/background-image.jpg';
import './Body.css';
function Body(props) {
  return (
    <div className="body">
      <div className="body__container">
        <img
          className="home__image"
          style={{ border: '1px solid blue' }}
          // src="https://m.media-amazon.com/images/I/81YSWfTFDbL._SX3000_.jpg"
          src={backgroudImage}
          alt=""
        />
        <div className="body__row">
          <Product
            imageSrc="https://m.media-amazon.com/images/I/71YbMhc-JLL._AC_UL320_.jpg"
            rating={5}
            description="LEGO City 2022 Advent Calendar 60352 Building Toy Set for Kids, Boys and Girls Ages 5+; Includes a City Playmat and 5 City TV"
            price={30}
          />
          <Product
            imageSrc="https://m.media-amazon.com/images/I/71YbMhc-JLL._AC_UL320_.jpg"
            rating={5}
            description="LEGO City 2022 Advent Calendar 60352 Building Toy Set for Kids, Boys and Girls Ages 5+; Includes a City Playmat and 5 City TV"
            price={30}
          />
        </div>
        <div className="body__row">
          <Product
            imageSrc="https://m.media-amazon.com/images/I/71YbMhc-JLL._AC_UL320_.jpg"
            rating={5}
            description="LEGO City 2022 Advent Calendar 60352 Building Toy Set for Kids, Boys and Girls Ages 5+; Includes a City Playmat and 5 City TV"
            price={30}
          />
          <Product
            rating={5}
            imageSrc="https://m.media-amazon.com/images/I/71YbMhc-JLL._AC_UL320_.jpg"
            description="LEGO City 2022 Advent Calendar 60352 Building Toy Set for Kids, Boys and Girls Ages 5+; Includes a City Playmat and 5 City TV"
            price={30}
          />
          <Product
            imageSrc="https://m.media-amazon.com/images/I/71YbMhc-JLL._AC_UL320_.jpg"
            rating={5}
            description="LEGO City 2022 Advent Calendar 60352 Building Toy Set for Kids, Boys and Girls Ages 5+; Includes a City Playmat and 5 City TV"
            price={30}
          />
        </div>
        <div className="body__row">
          <Product
            imageSrc="https://m.media-amazon.com/images/I/71YbMhc-JLL._AC_UL320_.jpg"
            rating={5}
            description="Amazon.com Gift Card in a Birthday Gift Box (Various Designs)"
            price={30}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
