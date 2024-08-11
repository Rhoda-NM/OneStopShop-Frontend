import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Footer from "../user/Footer";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts()
    },[]);

    const fetchProducts = async () => {
        try {
          const response = await axios.get('/api/products');
          setProducts(response.data);
          console.log(products)
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      };

    return(
        <Section>
            <ProductGrid> 
            {products.map((product) => (
                <Card key={product.id} product={product}  />
            ))}
            </ProductGrid>
        </Section>
    )
};

const Section = styled.section`
  max-width: 1170px;
  margin: 80px auto 0;
  padding: 0 20px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

export default Products;