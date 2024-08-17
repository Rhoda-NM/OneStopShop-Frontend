import React, { useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const WishlistItem = ({ id, name, image_url, price, originalPrice, discount , removeFromWishList}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  
  };
  const handleAddToCart = async () => {
    try {
      const response = await axios.post('/api/cart', {
        order_items: [
          {
            product_id: id,
            quantity: 1,
          }
        ]
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

  if (response.status === 201) {
    setShowModal(true)
  } else {
    alert('Failed to add item to cart.');
  }
} catch (err) {
  console.error('Error adding item to cart:', err);
  alert('There was an error adding the item to the cart.');
}
  };
  return (
    <>
    <ItemWrapper>
      <ImageContainer>
        {discount && <DiscountTag>-{discount}%</DiscountTag>}
        <ItemImage src={image_url} alt={name} />
        
      </ImageContainer>
      <AddToCartButton onClick={handleAddToCart}>
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
    {showModal && (
      <ModalBackground>
          <ModalWrapper>
              <ModalHeader>
                  <ModalTitle>Welcome</ModalTitle>
                  <CloseButton onClick={handleClose}>X</CloseButton>
              </ModalHeader>
              <ModalBody>Added to wishlist</ModalBody>
              <ModalFooter>
                  <CloseButton onClick={handleClose}>Close</CloseButton>
              </ModalFooter>
          </ModalWrapper>
      </ModalBackground>
    )}
    </>
  );
};
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
`;

// Modal Wrapper
const ModalWrapper = styled.div`
  background: white;
  border-radius: 5px;
  width: 500px;
  max-width: 90%;
  padding: 20px;
`;

// Modal Header
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee2e6;
`;

// Modal Title
const ModalTitle = styled.h5`
  margin: 0;
`;

// Modal Body
const ModalBody = styled.div`
  padding: 20px 0;
`;

// Modal Footer
const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid #dee2e6;
`;

const CloseButton = styled.button`
  padding: 5px 15px;
  background-color: #db4445;
  color: #333;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`; 
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
