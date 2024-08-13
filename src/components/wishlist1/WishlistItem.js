import React from "react";

const WishlistItem = ({ name, image, price }) => {
  return (
    <li>
      <img src={image} alt={name} style={{ width: "100px", height: "100px" }} />
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </li>
  );
};

export default WishlistItem;
