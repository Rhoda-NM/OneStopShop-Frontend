import React, { useState } from 'react';
import AddToWishlist from './AddToWishlist';

const ProductCard = ({ product, token }) => {
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const handleAddToWishlist = async () => {
    try {
      const success = await AddToWishlist(product.id);
      if (success) {
        setAddedToWishlist(true);
      } else {
        // Optionally handle unsuccessful addition
        alert('Failed to add to wishlist.');
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      alert('An error occurred while adding to wishlist.');
    }
  };

  return (
    <div className="card">
      <div className="Image_container">
        <div className="img">
          <img src={product.image_url} alt={product.name} />
        </div>
      </div>
      <div className="card_body">
        <div className="card_title">
          <h2>{product.name}</h2>
        </div>
        <div className="price_area">
          <div className="price_container">
            <span className="current_price">${product.price}</span>
          </div>
        </div>
        <div className="description">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
