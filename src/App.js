// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import ProductList from './components/ProductList/ProductList';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const [auth, setAuth] = useState(false);
  //estado de los banners
  const [banners, setBanners] = useState({
    banner1: true,
    banner2: true,
    banner3: true,
    banner4: true,
    banner5: true,
  });
  const [productsCount, setProductsCount] = useState(20); // Valor de productis por default 
  const [bannersPublicidad, setBannersPublicidad] = useState(() => {
    const storedBannersPublicidad = JSON.parse(localStorage.getItem('bannersPublicidad'));
    return storedBannersPublicidad ? storedBannersPublicidad : [];
  });
  useEffect(() => {
    //autenticacion
    const isAuth = localStorage.getItem('isAuth');
    if (isAuth === 'true') {
      setAuth(true);
    }
    //contador de productos
    const savedCount = localStorage.getItem('productsCount');
    if (savedCount) {
      setProductsCount(parseInt(savedCount, 10));
    }
  }, []);

  return (
    <Router>
      <div>   
      <Routes>
          <Route path="/" element={<Home banners={banners} auth={auth} />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute auth={auth}>
                <Admin 
                  setAuth={setAuth} 
                  banners={banners} 
                  setBanners={setBanners} 
                  productsCount={productsCount}
                  setProductsCount={setProductsCount}
                  bannersPublicidad={bannersPublicidad}
                  setBannersPublicidad={setBannersPublicidad}
                />
              </ProtectedRoute>
            }
          />
           <Route path="/product-list" element={<ProductList count={productsCount} auth={auth} bannersPublicidad={bannersPublicidad} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
