import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, category, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="product-page">
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="all">All Categories</option>
          <option value="grocery">Grocery</option>
          <option value="dairy">Dairy</option>
          <option value="fruits">Fruits & Vegetables</option>
          <option value="bakery">Bakery</option>
        </select>
      </div>
      <div className="products-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="category">Category: {product.category}</p>
              <div className="product-footer">
                <span className="price">₹{product.price}</span>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
