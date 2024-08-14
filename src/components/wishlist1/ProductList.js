import React from 'react';
import ProductList from './ProductList';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image_url: 'https://example.com/product1.jpg',
    price: 19.99,
    description: 'This is product 1',
  },
  {
    id: 2,
    name: 'Product 2',
    image_url: 'https://example.com/product2.jpg',
    price: 9.99,
    description: 'This is product 2',
  },
  // Add more products to the array
];

const App = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;