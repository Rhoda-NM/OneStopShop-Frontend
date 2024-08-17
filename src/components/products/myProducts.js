import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  margin-top: 20px;
  th, td {
    text-align: center;
    vertical-align: middle;
  }
  img {
    max-width: 100px;
    height: auto;
  }
`;

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/seller_products', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setProducts(response.data);
        } catch (error) {
            console.log('Error fetching products:', error);
        }
    };
    const handleRowClick = (productId) => {
        navigate(`/sellerdash/editproduct/${productId}`);
    
    };

    return (
        <div className='container'>
            <StyledTable striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} onClick={() => handleRowClick(product.id)}>
                            <td>
                                <img src={product.image_url} alt={product.name} />
                            </td>
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td>{product.category.name}</td>
                            <td>{product.stock}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </div>
    );
};

export default MyProducts;
