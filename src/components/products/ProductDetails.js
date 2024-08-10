import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ProductDetails.css';
import Image from '../assets/fifa.png';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <p>Error loading product: {error.message}</p>;
  if (!product) return <p>Loading...</p>;

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