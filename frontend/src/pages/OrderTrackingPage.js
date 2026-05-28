import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/OrderTrackingPage.css';

const OrderTrackingPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderStatus();
    const interval = setInterval(fetchOrderStatus, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, [orderId]);

  const fetchOrderStatus = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/orders/${orderId}`);
      setOrder(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching order status:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading order status...</div>;
  }

  if (!order) {
    return <div className="error">Order not found</div>;
  }

  const statusSteps = ['Confirmed', 'Preparing', 'On the way', 'Delivered'];
  const currentStep = statusSteps.indexOf(order.status);

  return (
    <div className="order-tracking">
      <h1>Order Tracking</h1>
      <div className="order-info">
        <p>Order ID: <strong>{order.id}</strong></p>
        <p>Status: <strong>{order.status}</strong></p>
        <p>Estimated Time: {order.estimatedTime} minutes</p>
      </div>
      <div className="tracking-timeline">
        {statusSteps.map((step, index) => (
          <div
            key={step}
            className={`timeline-step ${index <= currentStep ? 'active' : ''}`}
          >
            <div className="step-circle">{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
      {order.deliveryPersonName && (
        <div className="delivery-info">
          <h3>Delivery Agent</h3>
          <p>Name: {order.deliveryPersonName}</p>
          <p>Phone: {order.deliveryPersonPhone}</p>
        </div>
      )}
    </div>
  );
};

export default OrderTrackingPage;
