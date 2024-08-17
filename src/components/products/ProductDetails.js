import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { addToCart } from '../../stores/cart';
import { addToCartAsync } from '../../stores/cart';
import Card from '../Card/Card';
import Card from '../Card/Card';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
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

    const fetchRelatedProducts = async () => {
        try {
            const response = await axios.get(`/api/products/${id}/related`);
            setRelatedProducts(response.data);
        } catch (err) {
            console.error('Failed to fetch related products:', err);
        }
    };

    if (error) return <p>Error loading product: {error.message}</p>;
    if (!product) return <p>Loading...</p>;

    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    };

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        } else {
            const orderItems = [{
                productId: product.id,
                quantity: quantity,
            }];

            dispatch(addToCartAsync(orderItems));
            dispatch(addToCart({
                productId: product.id,
                quantity: quantity,
            }));
        }
    };

  return (
    <>
      <Header />
      <div className="product-details-page">
        <div className="breadcrumb">
          <a href="/">Account</a> / <a href="/">Gaming</a> / Havic HV G-92 Gamepad
        </div>
        <div className="product-details-container">
          <div className="product-image">
            <img src={Image} alt="Havic HV G-92 Gamepad" />
          </div>
          <div className="product-info">
            <h1 className="product-title">Havic HV G-92 Gamepad</h1>
            <div className="product-rating">
              <span className="stars">★★★★☆</span>
              <span className="reviews">(50 Reviews)</span>
              <span className="stock-status">In Stock</span>
            </div>
            <p className="product-price">$192.00</p>
            <p className="product-description">
              PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal Pressure sensitive.
            </p>
            <div className="quantity-control">
              <button className="quantity-btn" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
              <input type="text" value={quantity} readOnly className="quantity-input" />
              <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;



