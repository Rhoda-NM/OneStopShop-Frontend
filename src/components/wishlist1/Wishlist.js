import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthProvider"; // Adjust the path if needed
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      axios
        .get('/api/wishlist', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        .then(response => setWishlistItems(response.data))
        .catch(error => console.log('Error fetching wishlist:', error));
    }
  }, [user]);

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <ul>
          {wishlistItems.map(item => (
            <WishlistItem key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
