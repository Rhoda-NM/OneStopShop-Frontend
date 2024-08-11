import React from "react";
import styled from "styled-components";

const WishlistItem = ({ id, name, image, price, originalPrice, discount , removeFromWishList}) => {
  return (
    <ItemWrapper>
      <ImageContainer>
        {discount && <DiscountTag>-{discount}%</DiscountTag>}
        <ItemImage src={image} alt={name} />
        <WishlistIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9345dad452b03692cdbc613f709d144e723e1bbf5357d91182186f1925be37?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
          alt="Remove from wishlist"
          onClick={() => removeFromWishList(id)}
          
        />
      </ImageContainer>
      <AddToCartButton>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e462325802d0556992aa0397efea5256f6fd0a6001162dca8b6d920936baee1?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
          alt=""
        />
        Add To Cart
      </AddToCartButton>
      <ItemInfo>
        <ItemName>{name}</ItemName>
        <PriceInfo>
          <CurrentPrice>${price}</CurrentPrice>
          {originalPrice && <OriginalPrice>${originalPrice}</OriginalPrice>}
        </PriceInfo>
      </ItemInfo>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.article`
  background-color: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
  max-width: 200px;
`;

const ImageContainer = styled.div`
  position: relative;
  padding: 12px;
  height: 200px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const DiscountTag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #db4444;
  color: #fafafa;
  padding: 4px 12px;
  border-radius: 4px;
  font: 400 12px Poppins, sans-serif;
`;

const ItemImage = styled.img`
  width: 100%;
  margin-top: auto;
  height: auto;
  object-fit: cover;
`;

const WishlistIcon = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 34px;
  height: 34px;
  cursor: pointer;
`;

const AddToCartButton = styled.button`
  width: 100%;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 9px 0;
  font: 400 12px Poppins, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

const ItemInfo = styled.div`
  padding: 16px;
`;

const ItemName = styled.h3`
  font: 500 16px Poppins, sans-serif;
  color: #000;
  margin-bottom: 8px;
`;

const PriceInfo = styled.div`
  display: flex;
  gap: 12px;
`;

const CurrentPrice = styled.span`
  color: #db4444;
  font: 500 16px Poppins, sans-serif;
`;

const OriginalPrice = styled.span`
  color: #000;
  text-decoration: line-through;
  font: 500 16px Poppins, sans-serif;
`;

export default WishlistItem;
