import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartSummary = ({ totalPrice }) => {
  const navigate = useNavigate();
  const handlecheckout = async () => {
    navigate('/checkout')
  }
  return (
    <StyledCartSummary>
      <form className="coupon-form">
        <input
          type="text"
          placeholder="Coupon Code"
          aria-label="Enter coupon code"
        />
        <button type="submit">Apply Coupon</button>
      </form>
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${totalPrice}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
        <button className="checkout-btn" onClick={handlecheckout}>Proceed to checkout</button>
      </div>
    </StyledCartSummary>
  );
};

const StyledCartSummary = styled.aside`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  font-family: Poppins, sans-serif;

  .coupon-form,
  .cart-total {
    width: 48%;
    padding: 32px 24px;
    border-radius: 4px;
    border: 2px solid #000;
  }

  .coupon-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .coupon-form input,
  .coupon-form button {
    padding: 16px;
    border-radius: 4px;
  }

  .coupon-form input {
    border: 1px solid #000;
  }

  .coupon-form button,
  .checkout-btn {
    background-color: #db4444;
    color: #fafafa;
    border: none;
    font-weight: 500;
    cursor: pointer;
  }

  .cart-total h2 {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .summary-row:not(:last-child) {
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
  }

  .total {
    font-weight: bold;
  }

  .checkout-btn {
    width: 100%;
    padding: 16px;
    margin-top: 16px;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 20px;

    .coupon-form,
    .cart-total {
      width: 100%;
    }
  }
`;

export default CartSummary;

