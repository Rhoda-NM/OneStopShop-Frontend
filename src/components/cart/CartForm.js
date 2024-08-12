import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CartForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CartForm = ({ initialCartItems, onCartUpdate }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
    onCartUpdate(cartItems);
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    onCartUpdate(cartItems.filter((item) => item.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/checkout', cartItems);
      // Handle success response
    } catch (error) {
      console.error('There was an error processing the order!', error);
    }
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
          <button type="submit">Proceed to Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default CartForm;
