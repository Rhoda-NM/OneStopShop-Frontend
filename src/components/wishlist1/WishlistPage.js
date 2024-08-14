import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthProvider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth(); // Ensure useAuth hook provides user and token

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user || !user.token) return; // Avoid fetching if user or token is not available

      try {
        const response = await axios.get('/api/wishlist', {
          headers: { 'Authorization': `Bearer ${user.token}` }
        });
        console.log('Fetched Wishlist:', response.data); // Log the response data
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlist();
  }, [user]);

  console.log('Wishlist Page Rendered:', wishlist);

  return (
    <div>
      <Header />
      <h1>Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
      <Footer />
    </div>
  );
};

export default WishlistPage;
