import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [searchTerm, selectedCategory, products]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/seller_products', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setProducts(response.data);
            setFilteredProducts(response.data);
        } catch (error) {
            console.log('Error fetching products:', error);
        }
    };

    const filterProducts = () => {
        let filtered = products;

        if (searchTerm) {
            filtered = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.sku.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter(product => 
                product.category.name === selectedCategory
            );
        }

        setFilteredProducts(filtered);
    };

    const handleRowClick = (productId) => {
        navigate(`/sellerdash/editproduct/${productId}`);
    };

    // Pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container'>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by name or SKU"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FormControl as="select" onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {products.map(product => (
                        <option key={product.category.id} value={product.category.name}>
                            {product.category.name}
                        </option>
                    ))}
                </FormControl>
            </InputGroup>
            
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
                    {currentProducts.map((product) => (
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

            <PaginationContainer>
                <Pagination>
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePagination(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </PaginationContainer>
        </div>
    );
};

export default MyProducts;
