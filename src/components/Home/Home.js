// src/components/Home.js
/*import React, { useState } from 'react';
import './Home.css';

const banners = [
  { id: 1, active: true },
  { id: 2, active: true },
  { id: 3, active: true },
  { id: 4, active: true },
  { id: 5, active: true },
];

const Home = () => {
  const [bannerState, setBannerState] = useState(banners);

  const toggleBanner = (id) => {
    setBannerState((prev) =>
      prev.map((banner) =>
        banner.id === id ? { ...banner, active: !banner.active } : banner
      )
    );
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="banners">
        {bannerState.map(
          (banner) =>
            banner.active && <div key={banner.id} className={`banner banner-${banner.id}`}>Banner {banner.id}</div>
        )}
      </div>
      <button onClick={() => toggleBanner(1)}>Toggle Banner 1</button>
      {}
    </div>
  );
};

export default Home;
*/
// src/components/Home.js
// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import custom CSS for styles

const Home = ({banners, auth}) => (
  <div className="container my-4">
    <div className="row">
      <div className='col-12 mb-4 text-end'>
      {auth ? (
          <Link to="/admin" className="btn btn-primary">Admin</Link>
        ) : (
          <Link to="/login" className="btn btn-primary">Login</Link>
        )}
      </div>
     {banners.banner1 && (
      <div className="col-12 mb-4">
        <Link to="/product-list">
          <img src="./images/banner2@3x-100.jpg" className="img-fluid banner-image" alt="Banner 1" />
        </Link>
      </div>
       )}
      <div className="col-lg-12 col-md-12 mb-4">
        <div className="row">
        {banners.banner2 && (
          <div className="col-4 mb-4">
            <Link to="/product-list">
              <img src="./images/banner3@3x-100.jpg" className="img-fluid wide-image" alt="Banner 3" />
            </Link>
          </div>
           )}
           {banners.banner3 && (
          <div className="col-4">
            <Link to="/product-list">
            <img src="./images/banner4@3x-100.jpg" className="img-fluid wide-image" alt="Banner 4" />
            </Link>
          </div>
          )}
           {banners.banner4 && (
          <div className="col-4">
            <Link to="/product-list">
            <img src="./images/banner5@3x-100.jpg" className="img-fluid wide-image" alt="Banner 4" />
            </Link>
          </div>
           )}
        </div>
      </div>
      {banners.banner5 && (
      <div className="col-12 mb-4">
        <Link to="/product-list">
        <img src="./images/banner6@3x-100.jpg" className="img-fluid banner-image" alt="Banner 1" />
        </Link>
      </div>
       )}
    </div>
  </div>
);

export default Home;
