// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  const { _id, title, price, imageUrl } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        {/* Add more details or actions as needed */}
      </div>
    </div>
  );
};

export default ProductCard;
