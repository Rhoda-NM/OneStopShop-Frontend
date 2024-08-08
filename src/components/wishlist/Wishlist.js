import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './wishlist.css'; // Make sure to create this CSS file with your provided styles

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [productId, setProductId] = useState('');
  const [message, setMessage] = useState('');

  // Fetch wishlist on component mount
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5555/api/wishlist', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };
    fetchWishlist();
  }, []);

  // Add to wishlist
  const addToWishlist = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:5555/api/wishlist',
        { product_id: productId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setMessage(response.data.message);
      setWishlist([...wishlist, response.data.product]);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:5555/api/wishlist/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessage(response.data.message);
      setWishlist(wishlist.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <div>
      <h1>My Wishlist</h1>
      <input
        type="text"
        placeholder="Enter Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={addToWishlist}>Add to Wishlist</button>
      <p>{message}</p>
      <div className="card-wrapper">
        {wishlist.map((product) => (
          <div className="card" key={product.id}>
            <div className="card-img">
              <img src={product.image_url} alt={product.name} />
            </div>
            <div className="card-details">
              <h2 className="card-name">{product.name}</h2>
              <p className="card-price">${product.price}</p>
              <p className="card-description">{product.description}</p>
            </div>
            <button className="card-btn" onClick={() => removeFromWishlist(product.id)}>
              <i className="fas fa-trash-alt"></i> Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
