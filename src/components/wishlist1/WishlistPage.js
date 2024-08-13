import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthProvider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get('/api/wishlist', {
          headers: { 'Authorization': `Bearer ${user.token}` }
        });
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    if (user) {
      fetchWishlist();
    }
  }, [user]);

  console.log('Wishlist Page Rendered')

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
