import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { addToCart } from '../../stores/cart';
import { addToCartAsync } from '../../stores/cart';
import Card from '../Card/Card';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProductDetails();
        fetchRelatedProducts();
    }, [id]);

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`/api/products/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProduct(data);
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
                    <a href="/">Home</a> / <a href={`/category/${product.category.id}`}>{product.category.name}</a> / {product.name}
                </div>
                <div className="product-details-container">
                    <div className="product-image">
                        <img src={product.image_url} alt={product.name} />
                        <div className="product-thumbnails">
                            {product.images.map(image => (
                                <img key={image.id} src={image.image_url} alt={product.name} />
                            ))}
                        </div>
                    </div>
                    <div className="product-info">
                        <h1 className="product-title">{product.name}</h1>
                        <div className="product-rating">
                            <span className="stars">★★★★☆</span>
                            <span className="reviews">({product.ratings} Reviews)</span>
                            <span className="stock-status">{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
                        </div>
                        <div className="product-price">
                            {product.discount ? (
                                <>
                                    <span className="discounted-price">${(product.price * (1 - product.discount.discount_percentage / 100)).toFixed(2)}</span>
                                    <span className="original-price">${product.price.toFixed(2)}</span>
                                </>
                            ) : (
                                <span>${product.price.toFixed(2)}</span>
                            )}
                        </div>
                        <p className="product-description">{product.description}</p>
                        <div className="product-tags">
                            Tags: {product.tags.map(tag => tag.name).join(', ')}
                        </div>
                        <div className="quantity-control">
                            <button onClick={handleMinusQuantity} className="quantity-btn">-</button>
                            <input type="text" value={quantity} readOnly className="quantity-input" />
                            <button onClick={handlePlusQuantity} className="quantity-btn">+</button>
                        </div>
                        <button className="buy-now-button" onClick={handleAddToCart}>Add to Cart</button>
                        <button className="buy-now-button">Add to Wishlist</button>
                    </div>
                </div>
                <div className="product-reviews">
                    <h2>Customer Reviews</h2>
                    {product.ratings > 0 ? (
                        product.ratings.map(review => (
                            <div key={review.id} className="review">
                                <p><strong>{review.username}</strong> - {review.rating} ★</p>
                                <p>{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
                <div className="related-products">
                    <h2>Related Products</h2>
                    <div className="related-products-container">
                        {relatedProducts.map(product => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;







