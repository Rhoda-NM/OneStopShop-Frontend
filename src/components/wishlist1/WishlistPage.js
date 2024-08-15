import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; // Ensure the path is correct
import Header from '../Header/Header'; // Ensure the path is correct
import Footer from '../Footer/Footer'; // Ensure the path is correct

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define demo products
  const demoProducts = [
    { id: 1, name: 'Demo Product 1', description: 'Description for Demo Product 1', price: '$10.00', image: 'demo-image1.jpg' },
    { id: 2, name: 'Demo Product 2', description: 'Description for Demo Product 2', price: '$20.00', image: 'demo-image2.jpg' },
    { id: 3, name: 'Demo Product 3', description: 'Description for Demo Product 3', price: '$30.00', image: 'demo-image3.jpg' },
  ];

  useEffect(() => {
    const refreshToken = async () => {
      const refresh_token = localStorage.getItem('refresh_token');
      const res = await fetch('/api/refresh_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: refresh_token }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.access_token);
        return data.access_token;
      } else {
        console.error('Failed to refresh token');
        return null;
      }
    };

    const fetchWithTokenRefresh = async (url, options = {}) => {
      let token = localStorage.getItem('access_token');

      let res = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Authorization': `Bearer ${token}`,
        },
      });

      if (res.status === 401) {  // Token might be expired
        token = await refreshToken();
        if (token) {
          // Retry with new token
          res = await fetch(url, {
            ...options,
            headers: {
              ...options.headers,
              'Authorization': `Bearer ${token}`,
            },
          });
        }
      }

      return res.json();
    };

    const fetchWishlist = async () => {
      try {
        const apiData = await fetchWithTokenRefresh('/api/wishlist', { method: 'GET' });
        // Combine demo products with API data
        const combinedData = [...demoProducts, ...apiData];
        setWishlist(combinedData);
      } catch (err) {
        console.error('Error fetching wishlist:', err);
        // Use demo data if API call fails
        setWishlist(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist(); // Call the function to fetch wishlist data
  }, []); // Empty dependency array to run only once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
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
