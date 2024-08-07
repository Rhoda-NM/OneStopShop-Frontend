import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
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
  };

  const calculateTotal = (items) => {
    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(totalPrice);
  };

  const handleRemoveFromCart = async (id) => {
    try {
      await fetch(`/api/cart/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchCartItems();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.product.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart-summary">
        <h2>Grand Total: ${total.toFixed(2)}</h2>
        <p>Shipping Fee: Free</p>
        <button onClick={handleReturnHome}>Return to Home Page</button>
      </div>
    </div>
  );
};

export default CartPage;
