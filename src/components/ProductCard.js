import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">Acquista</a>
            </div>
        </div>
    );
}

export default ProductCard;
