import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Ensure the path is correct
import Header from '../Header/Header'; // Ensure the path is correct
import Footer from '../Footer/Footer'; // Ensure the path is correct

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzY1MjU5OSwianRpIjoiOTE1M2ZlODUtM2MwZC00YTk2LWJlNGItZDhkZWJjMjQ1NTZjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NSwibmJmIjoxNzIzNjUyNTk5LCJjc3JmIjoiOGRhMjI3NTgtNWEwYi00OTlkLTgyZjgtNDEwMWNlOThhYzRhIiwiZXhwIjoxNzIzNjUzNDk5fQ.9lNKY2G0OCS_P2Zh_r3M5LOxoGNwgn-fejTH9_-mPp0';
        const response = await axios.get('http://127.0.0.1:5555/api/wishlist', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error.response?.data || error.message);
        setError(error.response?.data || { msg: 'Error fetching wishlist.' });
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {typeof error === 'object' ? error.msg : error}</p>;
  }

  return (
    <div>
      <Header />
      <h1>Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="product-list">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
      <Footer />
    </div>
  );
};

export default WishlistPage;