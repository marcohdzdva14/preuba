// src/components/Admin/AddBannerPublicidad.js

import React, { useState } from 'react';

const AddBannerPublicidad = ({ addBannerPublicidad }) => {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState('100%');
  const [position, setPosition] = useState('');
  

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      const newBanner = { image, width, position, active: true };
      addBannerPublicidad(newBanner);
      setImage(null);
      setWidth('100%');
    } else {
      alert('Por favor, cargue una imagen.');
    }
  };

  return (
    <div className="add-banner-publicidad">
      <h2>Agregar Banner Publicidad</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="banner-image">Cargar Imagen:</label>
          <input type="file" id="banner-image" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label htmlFor="banner-width">Ancho del Banner:</label>
          <select id="banner-width" value={width} onChange={(e) => setWidth(e.target.value)}>
            <option value="100%">100%</option>
            <option value="intercalado">Intercalado</option>
          </select>
        </div>
        
          <div className="form-group">
            <label htmlFor="banner-position">Posición:</label>
            <input
              type="number"
              id="banner-position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Posición en el listado"
            />
          </div>
        
        <button type="submit" className="btn btn-primary">Agregar Banner</button>
      </form>
    </div>
  );
};

export default AddBannerPublicidad;
