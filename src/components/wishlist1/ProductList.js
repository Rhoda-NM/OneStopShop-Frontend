// ProductList.js
import React from 'react';
import ProductCard from './ProductCard'; // Ensure this path is correct

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          image_url={product.image_url}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
