import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
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
        fetchProductDetails();
    }, [id]);

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`/api/products/${id}`);
            if(!response.ok){
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProduct(data);
            console.log(data);
        } catch (err) {
            setError(err);
        }
    };

    if (error) return <p>Error loading product: {error.message}</p>;
    if (!product) return <p>Loading...</p>;

    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleAddToCart = () => {
        if (!localStorage.getItem('token')){
            navigate('/user/login');
        } else {
            const orderItems = [{
                product_id: product.id,
                quantity: quantity,
            }];

            dispatch(addToCartAsync(orderItems));
            dispatch(addToCart({
                product_id: product.id,
                quantity: quantity
            }));
        }
    }

    return (
        <>
            <Header />
            <ProductDetailsPage>
                <Breadcrumb>
                    <a href="/">Home</a> / <a href={`/category/${product.category.id}`}>{product.category.name}</a> / {product.name}
                </Breadcrumb>
                <ProductDetailsContainer>
                    <ProductImage>
                        <img src={product.image_url} alt={product.name} />
                        <div className="product-thumbnails">
                            {product.images.map(image => (
                                <img key={image.id} src={image.image_url} alt={product.name} />
                            ))}
                        </div>
                    </ProductImage>
                    <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductRating>
                            <span className="stars">★★★★☆</span>
                            <span className="reviews">({product.ratings} Reviews)</span>
                            <span className="stock-status">{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
                        </ProductRating>
                        <ProductPrice>
                            {product.discount ? (
                                <>
                                    <span className="discounted-price">${(product.price * (1 - product.discount.discount_percentage / 100)).toFixed(2)}</span>
                                    <span className="original-price">${product.price.toFixed(2)}</span>
                                </>
                            ) : (
                                <span>${product.price.toFixed(2)}</span>
                            )}
                        </ProductPrice>
                        <ProductDescription>
                            {product.description}
                        </ProductDescription>
                        <ProductTags>
                            Tags: {product.tags.map(tag => tag.name).join(', ')}
                        </ProductTags>
                        <QuantityControl>
                            <button onClick={handleMinusQuantity} className="quantity-btn">-</button>
                            <input type="text" value={quantity} readOnly className="quantity-input" />
                            <button onClick={handlePlusQuantity} className="quantity-btn">+</button>
                        </QuantityControl>
                        <BuyNowButton onClick={handleAddToCart}>Add to Cart</BuyNowButton>
                        <BuyNowButton>Add to Wishlist</BuyNowButton>
                    </ProductInfo>
                </ProductDetailsContainer>
                <ProductReviews>
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
                </ProductReviews>
            </ProductDetailsPage>
            <Footer />
        </>
    );
};

const ProductDetailsPage = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ProductImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    border-radius: 8px;
  }
  .product-thumbnails {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    img {
      width: 60px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        border: 2px solid #007bff;
      }
    }
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  .stars {
    color: #f8c317;
  }
  .reviews {
    font-size: 14px;
    color: #666;
  }
  .stock-status {
    font-size: 14px;
    color: green;
  }
`;

const ProductPrice = styled.p`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  .discounted-price {
    color: red;
    margin-right: 10px;
  }
  .original-price {
    text-decoration: line-through;
    color: #666;
  }
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #666;
`;

const ProductTags = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  .quantity-btn {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .quantity-input {
    width: 40px;
    text-align: center;
    border: 1px solid #ddd;
  }
`;

const BuyNowButton = styled.button`
  background-color: #db4445;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  &:hover {
    background-color: #ff919d;
  }
`;

const ProductReviews = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .review {
    margin-bottom: 20px;
    p {
      margin: 0;
    }
    strong {
      color: #333;
    }
  }
`;

export default ProductDetails;

