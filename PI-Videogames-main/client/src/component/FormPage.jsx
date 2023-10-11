import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    platforms: '',
    releaseDate: '',
    rating: '',
    genres: [], 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === '') {
      alert('El nombre es obligatorio.');
      return;
    }

    console.log('Datos enviados:', formData);
  };

  return (
    <div>
      <h1>Crear Nuevo Videojuego</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        {/* Agregar más campos como imagen, descripción, plataformas, fecha de lanzamiento, rating, géneros */}
        <button type="submit">Crear Videojuego</button>
      </form>
    </div>
  );
};

export default FormPage;