import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import axios from "axios";

const productsData = [
  {
    id: 1,
    name: "ASUS FHD Gaming Laptop",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a0e4e184a6a5b2e4ee5d233f61dc9d04b14271be2d8d35c990b026ba34b3f5c5?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd4aeaf0f75ee52eaf1a86b7dbd1677fcd7bf0df326c61447e0ca8c7cb5a12e?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884",
    price: 1160,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8a1d4e026b481115b4e6f1d0189b00e17ec71ce4d6e6f7f8e41c8414d117b671?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884",
    price: 560,
    rating: 4.5,
    reviews: 65,
    isNew: true,
  },
  {
    id: 4,
    name: "AK-900 Wired Keyboard",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c60dadaefb59964a1db2df449894abba925e7fe0836de23c4d3407d5775ff5ce?apiKey=198507df3fb1499aa3645c6bf5866884&&apiKey=198507df3fb1499aa3645c6bf5866884",
    price: 200,
    rating: 4.5,
    reviews: 65,
  },
];

const JustForYouSection = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const response = await axios.get('/api/wishlist/recommendations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRecommendedProducts(response.data);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  return (
    <Section>
      <SectionHeader>
        <TitleWrapper>
          <ColorBar />
          <Title>Just For You</Title>
        </TitleWrapper>
        <SeeAllButton>See All</SeeAllButton>
      </SectionHeader>
      <ProductGrid>
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductGrid>
    </Section>
  );
};

const Section = styled.section`
  max-width: 1170px;
  margin: 80px auto 0;
  padding: 0 20px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ColorBar = styled.div`
  width: 20px;
  height: 40px;
  background-color: #db4444;
  border-radius: 4px;
`;

const Title = styled.h2`
  font: 400 20px/1.3 Poppins, sans-serif;
  color: #000;
`;

const SeeAllButton = styled.button`
  background: transparent;
  border: none;
  font: 500 16px Poppins, sans-serif;
  color: #000;
  cursor: pointer;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

export default JustForYouSection;
