import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../components/products/ProductDetails.css';
import { addToCart } from '../stores/cart';
import { addToCartAsync } from '../stores/cart';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {    
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`/api/products/${id}`);
            setProduct(response.data);
        } catch (err) {
            setError(err);
        }
    };
    
    if (error) return <p>Error loading product: {error.message}</p>;
    if (!product) return <p>Loading...</p>;

    const handleMinusQuantity = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
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
                quantity: quantity
            }));
        }
    };

    return (
        <>
            <Header />
            <div className="product-details-page">
                <div className="breadcrumb">
                    <a href="/">Account</a> / <a href="/">Gaming</a> / {product.name}
                </div>
                <div className="product-details-container">
                    <div className="product-image">
                        <img src={product.image_url} alt={product.name} />
                    </div>
                    <div className="product-info">
                        <h1 className="product-title">{product.name}</h1>
                        <div className="product-rating">
                            <span className="stars">★★★★☆</span>
                            <span className="reviews">({product.reviews_count} Reviews)</span>
                            <span className="stock-status">{product.stock_status ? 'In Stock' : 'Out of Stock'}</span>
                        </div>
                        <p className="product-price">${product.price}</p>
                        <p className="product-description">{product.description}</p>
                        <div className="quantity-control">
                            <button onClick={handleMinusQuantity} className="quantity-btn">-</button>
                            <input type="text" value={quantity} readOnly className="quantity-input" />
                            <button onClick={handlePlusQuantity} className="quantity-btn">+</button>
                        </div>
                        <button onClick={handleAddToCart} className="buy-now-btn">Add to Cart</button>
                        <button className="buy-now-btn">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
