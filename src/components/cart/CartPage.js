import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './cartItem';
import { fetchCartItems, calculateTotal, clearCart } from '../../store/cart';
import { handleQuantityChange } from './CartForm';


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems(setCartItems, setTotal, calculateTotal);
  }, []);

  const handleRemoveFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    calculateTotal(cartItems, setTotal);
  };

  const handleClearCart = () => {
    clearCart(setCartItems, setTotal);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              handleQuantityChange={(id, quantity) => handleQuantityChange(id, quantity, setCartItems, calculateTotal)}
              handleRemoveItem={handleRemoveFromCart}
            />
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart-summary">
        <h2>Grand Total: ${total.toFixed(2)}</h2>
        <p>Shipping Fee: Free</p>
        <button onClick={handleClearCart}>Clear Cart</button>
        <button onClick={() => navigate('/')}>Return to Home Page</button>
      </div>
    </div>
  );
};

export default CartPage;
