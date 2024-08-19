import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartSummary from "./CartSummary";
import { useNavigate } from "react-router-dom";

// Fetch product details from the backend
const fetchProductDetails = async (id) => {
  try {
    const response = await fetch(`/api/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error fetching product details');
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};

  


const CartItems = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productImages, setProductImages] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);


  const handleCartUpdate = (updatedTotalPrice) => {
    setTotalPrice(updatedTotalPrice);
  };
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await fetch('/api/cart', {  
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.order_items){
          setCartItems(data.order_items);

          const productDetailsPromises = data.order_items.map(item => fetchProductDetails(item.product_id));
          const productDetails = await Promise.all(productDetailsPromises);
  
          setProductImages(
            productDetails.reduce((acc, details, index) => ({
              ...acc,
              [index]: { image_url: details.image_url, name: details.name }
            }), {})
          );
        }
      } catch (error) {
        setError('An error occurred while fetching the cart');
        console.error('Error fetching cart:', error);
      } finally {
        const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(subtotal)
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product_id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleUpdateCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ order_items: cartItems }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedCart = await response.json();
      setCartItems(updatedCart.order_items);
      handleCartUpdate(updatedCart.total_price); // Pass updated total price to the CartSummary component
    } catch (error) {
      setError('An error occurred while updating the cart');
    }
  };
  const handleDeleteItem = async (productId)=>{
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/cart/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedCart = await response.json();
      setCartItems(updatedCart.order_items);
      handleCartUpdate(updatedCart.total_price);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (cartItems.length === 0) return (<>
  <StyledCartItems>
  <div className="cart-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>
      <div className="cart-item">
      <p>No items in the cart.</p>
      </div>

  </StyledCartItems>
  </>)


  return (
    <>
<StyledCartItems>
      <div className="cart-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>
      {cartItems.map((item, index) => (
        <div key={item.id} className="cart-item">
          <div className="product-info">
            <img src={productImages[index].image_url} alt={item.name} />
            <span>{productImages[index].name}</span>
          </div>
          <span className="price">${item.price}</span>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(item.product_id, item.quantity - 1)} className="quantity_buttons">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.product_id, item.quantity + 1)} className="quantity_buttons">+</button>
          </div>
          <span className="subtotal">${item.price * item.quantity}</span>
          <div>
        <button className="Remove_item" title="remove Item from cart" onClick={()=>handleDeleteItem(item.product_id)}>X</button>
      </div>
        </div>
      ))}
      <div className="cart-actions">
        <button className="return-shop" onClick={()=>navigate('/')}>Return To Shop</button>
        <button className="update-cart" onClick={handleUpdateCart}>Update Cart</button>
      </div>

    </StyledCartItems>      

      <CartSummary totalPrice={totalPrice} />
    </>
  );
};


const StyledCartItems = styled.section`
  margin-top: 60px;
  font-family: Poppins, sans-serif;

  .cart-header,
  .cart-item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    padding: 24px 40px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 13px rgba(0, 0, 0, 0.05);
    margin-bottom:10px;
  }

  .cart-header {
    font-weight: 400;
    color: #000;
  }

  .product-info {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .product-info img {
    width: 54px;
    height: 54px;
    object-fit: contain;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .quantity-control input {
    width: 60px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
  }

  .cart-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }

  .return-shop,
  .update-cart {
    padding: 16px 48px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
  }

  .return-shop {
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: none;
  }

  .update-cart {
    border: none;
    background-color: #db4444;
    color: #fff;
  }
  .Remove_item{
  background-color: #DB4444;
  color: #fff;
  border: none;
  width:45px;
  cursor:pointer;
  border-radius:5px;
  font-weight:500
  }
  .Remove_item:hover{
  background-color: white;
  border: solid 1px #DB4444;
  color: #DB4444;
  cursor: pointer;
  }
  .quantity_buttons {
    display: flex;
    justify-content: center;
    align-items: center; /* Aligns buttons vertically */
    width: 30px; /* Adjust the width to fit the buttons */
    border: none;
    background-color: #f0f0f0; /* Light grey background */
    border-radius: 5px; /* Rounded corners */
    max-width:
}

.quantity-control button {
    font-size: 16px;
    border: 1px solid #ccc;
    background-color: #ffffff;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;
}

.quantity_buttons:hover {
    background-color: #e0e0e0; /* Darker grey on hover */
}

.quantity_buttons:active {
    background-color: #d0d0d0; /* Even darker grey when active */
}


`;

export default CartItems;