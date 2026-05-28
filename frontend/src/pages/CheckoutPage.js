import React, { useState } from 'react';
import axios from 'axios';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    deliveryAddress: '',
    phoneNumber: '',
    paymentMethod: 'card',
  });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const cartItems = JSON.parse(localStorage.getItem('cart'));
      const response = await axios.post('http://localhost:8080/api/orders', {
        items: cartItems,
        deliveryAddress: formData.deliveryAddress,
        phoneNumber: formData.phoneNumber,
        paymentMethod: formData.paymentMethod,
      });

      setOrderId(response.data.id);
      localStorage.removeItem('cart');
      setLoading(false);
    } catch (error) {
      console.error('Error placing order:', error);
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="order-success">
        <h2>Order Placed Successfully!</h2>
        <p>Order ID: {orderId}</p>
        <p>Your order will be delivered within 15 minutes.</p>
        <a href={`/track-order/${orderId}`} className="track-btn">
          Track Order
        </a>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Delivery Address</label>
          <textarea
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            required
            placeholder="Enter your delivery address"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="wallet">Digital Wallet</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
