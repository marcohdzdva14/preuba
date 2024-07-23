// src/components/ProductList.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import generateRandomProducts from '../../utils/generateProducts';
import './ProductList.css'; // Import custom CSS for styling

const ProductList = ({count, auth}) => {
  // Genera  productos aleatorios segun lo configurado por default trae 20
  const products = generateRandomProducts(count);
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Regresar</button>
        {auth ? (
          <Link to="/admin" className="btn btn-primary">Admin</Link>
        ) : (
          <Link to="/login" className="btn btn-primary">Login</Link>
        )}
      </div>
      <h1>Nuestros productos</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>{product.price}</strong></p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
