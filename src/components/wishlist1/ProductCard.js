import React, { useState } from 'react';
import AddToWishlist from './AddToWishlist';

const ProductCard = ({ product, token }) => {
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const handleAddToWishlist = async () => {
    const success = await AddToWishlist(product.id, token);
    if (success) {
      setAddedToWishlist(true);
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
        <button onClick={handleAddToWishlist}>
          {addedToWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;