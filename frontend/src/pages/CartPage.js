import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const sum = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(sum);
  };

  const removeItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <div className="quantity-control">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <input type="number" value={item.quantity} readOnly />
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {cartItems.length}</p>
        <h2>Total: ₹{total}</h2>
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
