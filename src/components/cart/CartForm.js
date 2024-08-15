import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartItem from './cartItem';
import { fetchCartItems, calculateTotal, clearCart } from '../../stores/cart';

const CartForm = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
    calculateTotal(cartItems, setTotalPrice);
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    calculateTotal(cartItems, setTotalPrice);
  };

  useEffect(() => {
    fetchCartItems(setCartItems, setTotalPrice, calculateTotal);
  }, []);

  const handleClearCart = () => {
    clearCart(setCartItems, setTotalPrice);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/checkout', cartItems);
      // Handle success response
    } catch (error) {
      console.error('There was an error processing the order!', error);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-info">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              handleQuantityChange={handleQuantityChange}
              handleRemoveItem={handleRemoveItem}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-form">
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Grand Total: ${totalPrice.toFixed(2)}</h2>
          </div>
          <div className="cart-buttons">
            <button type="button" onClick={() => navigate('/')}>Return to Homepage</button>
            <button type="button" onClick={() => navigate('/products')}>Add More Items</button>
            <button type="button" onClick={handleClearCart}>Clear Cart</button>
            <button type="submit">Proceed to Checkout</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartForm;
