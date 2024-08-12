/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";

const TopHeader = () => {
  return (
    <StyledTopHeader>
      <div className="header-content">
        <p className="sale-announcement">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
      <div className="language-selector">
        <span>English</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/086dd669bbad3e4fcefbf1d6392f774b77d8ae772723fe01a24425e01abcaf04?placeholderIfAbsent=true&apiKey=198507df3fb1499aa3645c6bf5866884"
          alt="Language selector"
        />
      </div>
    </StyledTopHeader>
  );
};

const StyledTopHeader = styled.header`
  background-color: #000;
  color: #fafafa;
  padding: 12px 70px;
  font: 14px Poppins, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .sale-announcement {
    max-width: 474px;
  }

  .shop-now-btn {
    font-weight: 600;
    text-decoration: underline;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
  }

  .language-selector {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 991px) {
    padding: 12px 20px;
  }
`;

export default TopHeader;