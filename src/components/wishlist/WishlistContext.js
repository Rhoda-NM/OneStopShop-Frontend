// components/wishlist/WishlistContext.js
import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = async (productId, token) => {
    try {
      const response = await fetch('/api/wishlist', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId }),
      });

      if (response.ok) {
        const data = await response.json();
        setWishlist((prev) => [...prev, data]);
      } else {
        console.error('Failed to add to wishlist');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
