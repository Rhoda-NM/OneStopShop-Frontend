import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartPage from './CartPage'

const CartForm = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const fetchCartItems = useCallback(async () => {
    try {
      const response = await fetch('/api/cart', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setCartItems(data.cart_items);
      calculateTotal(data.cart_items);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  }, []); // Using an empty array if there are no dependencies to prevent re-creation.

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const calculateTotal = (items = cartItems) => {
    const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
    calculateTotal(); // Update total after changing quantity.
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    calculateTotal(); // Update total after removing item.
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

  const handleReturnToHome = () => {
    navigate('/');
  };

  const handleAddMoreItems = () => {
    navigate('/products');
  };

  return (
    <div className="cart-container">
      <div className="cart-info">
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <i className="one-stop-shopping-cart"></i>
                <div>
                  <h4>{item.product.name}</h4>
                  <p>Price: ${item.product.price.toFixed(2)}</p>
                  <p>
                    Quantity:
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      min="1"
                    />
                  </p>
                  <p>Total: ${(item.product.price * item.quantity).toFixed(2)}</p>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="cart-form">
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Grand Total: ${totalPrice.toFixed(2)}</h2>
          </div>
          <div className="cart-buttons">
            <button type="button" onClick={handleReturnToHome}>Return to Homepage</button>
            <button type="button" onClick={handleAddMoreItems}>Add More Items</button>
            <button type="submit">Proceed to Checkout</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartForm;
