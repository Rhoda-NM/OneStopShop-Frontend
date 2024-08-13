import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import './ProductDetails.css';
import { useAuth } from '../../AuthProvider';
import AddToWishlist from '../wishlist/AddWishlist';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = localStorage.getItem('token');

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);

        // Fetch related items based on category
        const categoryResponse = await axios.get(`https://dummyjson.com/products?category=${response.data.category}`);
        
        // Filter out the current product and limit the number of related items
        const filteredItems = categoryResponse.data.products
          .filter(p => p.id !== id)
          .slice(0, 4); // Limit to 4 related items
        
        setRelatedItems(filteredItems);
      } catch (err) {
        setError(err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToWishlist = async () => {
    if (!user) {
      navigate('/user/login');
      return;
    }

    const added = await AddToWishlist(product.id, token);
    if (added) {
      alert('Added to wishlist successfully!');
    } else {
      alert('Failed to add to wishlist.');
    }
  };

  if (error) return <p>Error loading product: {error.message}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="product-details-page">
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href={`/category/${product.category}`}>{product.category}</a> / {product.title}
        </div>
        <div className="product-details-container">
          <div className="product-image">
            <img src={product.images[0]} alt={product.title} />
          </div>
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-rating">
              <span className="stars">★★★★☆</span>
              <span className="reviews">({product.reviews.length} Reviews)</span>
              <span className="stock-status">{product.availabilityStatus}</span>
            </div>
            <p className="product-price">${product.price}</p>
            <p className="product-description">
              {product.description}
            </p>
            <div className="quantity-control">
              <button className="quantity-btn" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
              <input type="text" value={quantity} readOnly className="quantity-input" />
              <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="buy-now-btn">Buy Now</button>
            <button className="wishlist-btn" onClick={handleAddToWishlist}>Add to Wishlist</button>
          </div>
        </div>
        <div className="related-items">
          <h2>Related Items</h2>
          <div className="related-items-container">
            {relatedItems.map(item => (
              <Card 
                key={item.id}
                productName={item.title}
                image_url={item.thumbnail}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
