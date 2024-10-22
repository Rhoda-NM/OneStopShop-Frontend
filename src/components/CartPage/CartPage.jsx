import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import Footer from "./Footer";
import Header from "../Header/Header";

const CartPage = () => {
    

  return (
    <StyledCartPage>
      <Header />
      <main className="cart-main">
        <CartItems />
      </main>
      <Footer />
    </StyledCartPage>
  );
};


const StyledCartPage = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default CartPage;

