import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Styled components for styling the table and its elements
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  cursor: pointer;
`;

const TableCell = styled.td`
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
`;

const ProductImage = styled.img`
  width: 50px;
  height: auto;
`;

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/seller/products'); // Replace with your API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleRowClick = (productId) => {
    navigate(`/products/edit/${productId}`);
  };

  return (
    <div className="dashboard-body">
      <h2>My Products</h2>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Img</TableHeader>
            <TableHeader>SKU</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Stock</TableHeader>
            <TableHeader>Sales</TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow key={product.id} onClick={() => handleRowClick(product.id)}>
              <TableCell>
                <ProductImage src={product.image_url} alt={product.name} />
              </TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sales}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default MyProducts;
