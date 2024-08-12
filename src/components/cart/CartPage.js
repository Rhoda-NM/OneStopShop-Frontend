import React, { useState } from 'react';
import axios from 'axios';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
  // sample
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cart', { items: cartItems });
      console.log('Cart updated successfully:', response.data);
    } catch (error) {
      console.error('There was an error updating the cart!', error);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h4>{item.product.name}</h4>
            <p>Price: ${item.product.price.toFixed(2)}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
            <p>Total: ${(item.product.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Grand Total: ${cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2)}</h2>
        <button onClick={handleSubmit}>Update Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
