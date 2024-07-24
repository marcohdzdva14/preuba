import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Admin = ({ setAuth, banners, setBanners, productsCount, setProductsCount }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    setAuth(false);
    navigate('/');
  };
  
  const toggleBanner = (banner) => {
    const action = banners[banner] ? 'desactivar' : 'activar';
    const confirmed = window.confirm(`¿Estás seguro que deseas ${action} el ${banner}?`);
    if (confirmed) {
      setBanners((prevBanners) => ({
        ...prevBanners,
        [banner]: !prevBanners[banner],
      }));
    }
  };

  const handleProductsCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    if (!isNaN(count) && count > 0) {
      setProductsCount(count);
      localStorage.setItem('productsCount', count);
    }
  };

  useEffect(() => {
    const savedCount = localStorage.getItem('productsCount');
    if (savedCount) {
      setProductsCount(parseInt(savedCount, 10));
    }
  }, [setProductsCount]);


  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <h1>Administrador de banners</h1>
      <p>Aquí podrás activar o desactivar los banners del home</p>
      <div className="mb-4">
        <Link to="/" className="btn btn-primary me-2">Home</Link>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
      <div className="mt-4">
        <h2>Banners</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {Object.keys(banners).map((banner) => (
            <div key={banner} className="me-2 mb-2">
              <button
                className={`btn ${banners[banner] ? 'btn-success' : 'btn-secondary'}`}
                onClick={() => toggleBanner(banner)}
              >
                {banners[banner] ? `Desactivar ${banner}` : `Activar ${banner}`}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h2>Configuración de Productos</h2>
          <label htmlFor="productsCount">Número de Productos:</label>
          <input
            id="productsCount"
            type="number"
            min="1"
            value={productsCount}
            onChange={handleProductsCountChange}
            className="form-control w-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
