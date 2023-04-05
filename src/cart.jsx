import React, { useState } from "react";

export default function Cart({ items }) {
  const [showTotal, setShowTotal] = useState(false);
  const total = items.reduce((acc, item) => {
    if (isNaN(item.price)) {
      // handle NaN value
      return acc;
    } else {
      return acc + item.price;
    }
  }, 0);

  const handleButtonClick = () => {
    setShowTotal(true);
  };

  return (
    <div id="cart">
      <h2 className="heading">Cart ({items && items.length})</h2>
      {items &&
        items.map((item, index) => (
          <h1 key={index}>
            <img id="cartimg" src={item.image} alt="" />
            <p>{item.name}</p>
            <p>₹{item.price}</p>
          </h1>
        ))}
      <button id="tbtn"onClick={handleButtonClick}>Total</button>
      {showTotal && <p id="ttext">Total: ₹{total}</p>}<br></br><br></br>
      <button id="bbtn" class="bbtn">Buy Now</button>
    </div>
  );
}
