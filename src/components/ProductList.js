import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

function ProductList() {
  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
