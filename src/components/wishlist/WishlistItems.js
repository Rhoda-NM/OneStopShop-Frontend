import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import WishlistItem from "./WishlistItem";
import axios from "axios";


const WishlistItems = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get('/api/wishlist', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWishlist(response.data);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };


  const removeFromWishlist = async (productId) => {
    try {
      const response = await axios.delete(`/api/wishlist/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(response.data)
      setWishlist(response.data);
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <WishlistSection>
      <WishlistHeader>
        <h2>Wishlist (4)</h2>
        <MoveAllButton>Move All To Cart</MoveAllButton>
      </WishlistHeader>
      <ItemsGrid>
        {wishlist.map((item) => (
          <WishlistItem key={item.id} {...item} removeFromWishList={removeFromWishlist} />
        ))}
      </ItemsGrid>
    </WishlistSection>
  );
};

//const addToWishlist = async (productId) => {
    /*if (!token) {
      navigate('/login'); // Redirect to login page
      return;
    }
    try {
      const response = await axios.post(`/api/wishlist/${productId}`);
      setWishlist(response.data);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };*/
const WishlistSection = styled.section`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 20px;
`;

const WishlistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h2 {
    font: 400 20px/1.3 Poppins, sans-serif;
    color: #000;
  }
`;

const MoveAllButton = styled.button`
  background: transparent;
  border: none;
  font: 500 16px Poppins, sans-serif;
  color: #000;
  cursor: pointer;
`;

const ItemsGrid = styled.div`
  margin-left: 25%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

export default WishlistItems;
