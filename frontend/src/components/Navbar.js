import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <h1>🚀 FastDeliver</h1>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              <FaShoppingCart /> Cart
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <span className="user-info">
                  <FaUser /> {user.name}
                </span>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="login-link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
