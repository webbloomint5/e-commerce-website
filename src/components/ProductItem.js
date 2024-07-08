import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
}

export default ProductItem;
