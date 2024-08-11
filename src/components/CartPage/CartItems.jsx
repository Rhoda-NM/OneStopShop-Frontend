/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";

const cartItems = [
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/129fc6c9d1bb39d8d78d769ca2a4d305f88210676c99a523e090ced4bf40708f?placeholderIfAbsent=true&apiKey=198507df3fb1499aa3645c6bf5866884",
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: 550,
    quantity: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4926fd66bd86b5a07960aa8a1be6c0ec29bbf54a4935cb734d0c276cd37b21ee?placeholderIfAbsent=true&apiKey=198507df3fb1499aa3645c6bf5866884",
  },
];
// add to cart function

//view cart function

//update quantity

//remove item from cart

//empty cart

const CartItems = () => {
  return (
    <StyledCartItems>
      <div className="cart-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="product-info">
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
          <span className="price">${item.price}</span>
          <div className="quantity-control">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c44faa7a8644ae900a7d378cd3b41603029d037847835192a29cf764132dde60?placeholderIfAbsent=true&apiKey=198507df3fb1499aa3645c6bf5866884"
              alt="Quantity control"
            />
          </div>
          <span className="subtotal">${item.price * item.quantity}</span>
        </div>
      ))}
      <div className="cart-actions">
        <button className="return-shop">Return To Shop</button>
        <button className="update-cart">Update Cart</button>
      </div>
    </StyledCartItems>
  );
};

const StyledCartItems = styled.section`
  margin-top: 80px;
  font-family: Poppins, sans-serif;

  .cart-header,
  .cart-item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: center;
    padding: 24px 40px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 13px rgba(0, 0, 0, 0.05);
    margin-bottom: 40px;
  }

  .cart-header {
    font-weight: 400;
    color: #000;
  }

  .product-info {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .product-info img {
    width: 54px;
    height: 54px;
    object-fit: contain;
  }

  .quantity-control img {
    width: 75px;
  }

  .cart-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }

  .return-shop,
  .update-cart {
    padding: 16px 48px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
  }

  .return-shop {
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: none;
  }

  .update-cart {
    border: none;
    background-color: #db4444;
    color: #fff;
  }

  @media (max-width: 991px) {
    .cart-header,
    .cart-item {
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 20px;
    }

    .cart-actions {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export default CartItems;
