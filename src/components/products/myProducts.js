import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = async () => {
        try{
            const response = await axios.get('/api/user_products');
            setProducts(response.data);
        } catch (error){
            console.log('Error fetching products:', error);
        }
    };
  return (
    <div className='container'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>SKU</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>
                            <img src={product.image_url} alt={product.name}/>
                        </td>
                        <td>{product.sku}</td>
                        <td>{product.name}</td>
                        <td>{product.stock}</td>
                        <td>{product.category.name}</td>
                    </tr>
                ))}
                
            </tbody>
        </Table>
    </div>
  )
}

export default MyProducts;