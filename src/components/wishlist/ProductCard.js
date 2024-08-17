import React from "react";
import styled from "styled-components";

const ProductCard = ({
  name,
  image_url,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  isNew,
}) => {
  return (
    <CardWrapper>
      <ImageContainer>
        {discount && <DiscountTag>-{discount}%</DiscountTag>}
        {isNew && <NewTag>NEW</NewTag>}
        <ProductImage src={image_url} alt={name} />
        <WishlistIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
          alt="Add to wishlist"
        />
      </ImageContainer>
      <AddToCartButton>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1c7b4c5b8a14be22a3ab2dcaf00ea2a28efa02e58b408afde256eec3ce6cfd?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
          alt=""
        />
        Add To Cart
      </AddToCartButton>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <PriceInfo>
          <CurrentPrice>${price}</CurrentPrice>
          {originalPrice && <OriginalPrice>${originalPrice}</OriginalPrice>}
        </PriceInfo>
        <RatingInfo>
          <StarRating
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884"
            alt={`${rating} out of 5 stars`}
          />
          <ReviewCount>({reviews})</ReviewCount>
        </RatingInfo>
      </ProductInfo>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  background-color: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
  max-width:200px
`;

const ImageContainer = styled.div`
  position: relative;
  padding: 12px;
  height: 200px;
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

const NewTag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #0f6;
  color: #fafafa;
  padding: 4px 12px;
  border-radius: 4px;
  font: 400 12px Poppins, sans-serif;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
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

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductName = styled.h3`
  font: 500 16px Poppins, sans-serif;
  color: #000;
  margin-bottom: 8px;
`;

const PriceInfo = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
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

const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StarRating = styled.img`
  width: 100px;
  height: 20px;
`;

const ReviewCount = styled.span`
  font: 600 14px Poppins, sans-serif;
  color: #000;
`;

export default ProductCard;
