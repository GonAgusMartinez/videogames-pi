import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../FormPage/FormPage.module.css';


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
<div className={styles['formpage-container']}>
  <h1 className={styles['form-title']}>Crear Nuevo Videojuego</h1>
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
    <button className={styles['form-button']} type="submit">Crear Videojuego</button>
  </form>
  <Link to="/home" className={styles['button-link']}>Volver a la Lista de Videojuegos</Link>
</div>
  );
};

export default FormPage;