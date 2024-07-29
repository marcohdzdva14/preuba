import React , { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import generateRandomProducts from '../../utils/generateProducts';
import './ProductList.css'; // Import custom CSS for styling


const ProductList = ({count, auth, bannersPublicidad}) => {
  // Genera  productos aleatorios segun lo configurado por default trae 20
  const products = generateRandomProducts(count);
  const navigate = useNavigate();
  const productsPerRow = 4;

  useEffect(() => {
    console.log("Banners Publicidad:", bannersPublicidad);
  }, [bannersPublicidad]);

  const getRowsWithBanners = () => {
    const rows = [];
    const totalProducts = products.length;
    const totalRows = Math.ceil(totalProducts / productsPerRow);

    for (let i = 0; i < totalRows; i++) {
      const start = i * productsPerRow;
      const end = start + productsPerRow;
      const productRow = products.slice(start, end);

      const banner100 = bannersPublicidad.find(banner => banner.position !== null && Number(banner.position) === (i + 1) && banner.width === '100%');
      const bannerIntercalado = bannersPublicidad.find(banner => banner.position !== null && Number(banner.position) === (i + 1) && banner.width !== '100%');

      rows.push(
        <div className="row" key={`product-row-${i}`}>
          {productRow.map((product, index) => (
            <React.Fragment key={product.id}>
            {bannerIntercalado && index === Number(bannerIntercalado.position) - 1 && (
              <div className="col-md-3 mb-4" key={`banner-intercalado-${i}-${index}`}>
                <div className="card">
                  <img src={bannerIntercalado.image} className="card-img-top" alt={`Banner Publicidad ${i + 1}`} />
                </div>
              </div>
            )}
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src={product.image} className="card-img-top" alt={`Producto ${product.id}`} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>${product.price}</strong></p>
                  <button className="btn btn-primary">Ver más</button>
                </div>
              </div>
            </div>
          </React.Fragment>
          ))}
        </div>
      );

      if (banner100) {
        rows.push(
          <div className="row" key={`banner-row-${i}`}>
            <div className="col-12">
              <img src={banner100.image} alt={`Banner Publicidad ${i + 1}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        );
      }
    }
    return rows;
  };


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
      {getRowsWithBanners()}
      </div>
    </div>
  );
};

export default ProductList;
