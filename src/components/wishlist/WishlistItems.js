import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import WishlistItem from "./WishlistItem";
import axios from "axios";

const wishlistData = [
  {
    id: 1,
    name: "Gucci duffle bag",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5122d01a4fe541587ff713bce6702edffb26575426f80b242297cd8380270930?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884",
    price: 960,
    originalPrice: 1160,
    discount: 35,
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/354194eb5f04a52b2469cb1113e341eb5ea17534ff884bd8fde6892e668e1394?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884",
    price: 1960,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1eaf9648e44c0d90ac33966f10491ae0821650caea9df60acf8fa148140bd85a?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884",
    price: 550,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0e5463396806d0194e3dff386c4f84681eaf7e9a0658ed3ef5e7573f6908cbbe?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884",
    price: 750,
  },
];

const WishlistItems = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

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

  const removeFromWishlist = async (productId) => {
    try {
      const response = await axios.delete(`/api/wishlist/${productId}`);
      setWishlist(response.data);
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <WishlistSection>
      <WishlistHeader>
        <h2>Wishlist (4)</h2>
        <MoveAllButton>Move All To Bag</MoveAllButton>
      </WishlistHeader>
      <ItemsGrid>
        {wishlistData.map((item) => (
          <WishlistItem key={item.id} {...item} />
        ))}
      </ItemsGrid>
    </WishlistSection>
  );
};

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
