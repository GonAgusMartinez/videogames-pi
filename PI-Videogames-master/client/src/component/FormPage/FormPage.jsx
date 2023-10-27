import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './FormPage.module.css';
import Formpage from '../FormPage/Formpage.png';

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

    if (name === "genres") {
      const genresArray = value.split(',').map(genre => genre.trim());
      setFormData({
        ...formData,
        [name]: genresArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateDescription = (description) => {
    return description.length <= 1000;
  };

  const validateGenres = (genres) => {
    const allowedGenres = [
      'Acción', 'Indie', 'Aventura', 'Juegos de Rol', 'Estrategia', 'Juegos de Disparos',
      'Casuales', 'Simuladores', 'Rompecabezas', 'Arcade', 'Plataformas', 'Multijugador',
      'Carreras', 'Deportes', 'Juegos de Pelea', 'Familiares', 'Juegos de Mesa',
      'Educativos', 'Juegos de Cartas'
    ];

    const inputGenres = genres.split(',').map((genre) => genre.trim());
    return inputGenres.every((genre) => allowedGenres.includes(genre));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === '' ||
      formData.image === '' ||
      formData.description === '' ||
      formData.platforms === '' ||
      formData.releaseDate === '' ||
      formData.rating === '' ||
      formData.genres.length === 0
    ) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (formData.name.length > 100) {
      alert('El nombre del juego no puede tener más de 100 caracteres.');
      return;
    }

    if (parseFloat(formData.rating) < 0 || parseFloat(formData.rating) > 5) {
      alert('El rating debe estar entre 0 y 5.');
      return;
    }

    const releaseYear = new Date(formData.releaseDate).getFullYear();
    if (releaseYear < 1972) {
      alert('La fecha de lanzamiento no puede ser anterior a 1972.');
      return;
    }

    if (!validateDescription(formData.description)) {
      alert('La descripción no puede tener más de 1000 caracteres.');
      return;
    }

    if (!validateGenres(formData.genres.join(', '))) {
      alert('Géneros no válidos.');
      return;
    }

    alert('Juego creado');
  };


  return (
    <div className={styles['formpage-container']}>
      <div className={styles['left-content']}>
        <h1 className={styles['form-title']}>Crea tu Videojuego</h1>
        <form onSubmit={handleSubmit}>
        <div className={styles['form-label']}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles['form-text']}
            />
          </label>
        </div>
        <div className={styles['form-label']}>
          <label>
            Imagen (URL):
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className={styles['form-text']}
            />
          </label>
        </div>
        <div className={styles['form-label']}>
          <label>
            Descripción:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={styles['form-text']}
            />
          </label>
        </div>
        <div className={styles['form-label']}>
          <label>
            Plataformas:
            <input
              type="text"
              name="platforms"
              value={formData.platforms}
              onChange={handleInputChange}
              className={styles['form-text']}
            />
          </label>
        </div>
        <div className={styles['form-label']}>
          <label>
            Fecha de Lanzamiento:
            <input
              type="date"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleInputChange}
              className={styles['form-text']}
            />
          </label>
        </div>
        <div className={styles['form-label']}>
          <label>
            Rating:
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className={styles['form-text']}
            />
          </label>
        </div>
        <div className={styles['form-label']}>
          <label>
            Géneros (separados por comas):
            <input
              type="text"
              name="genres"
              value={formData.genres.join(', ')}
              onChange={handleInputChange}
              className={styles['form-text']}
            />
          </label>
        </div>
        <button type="submit" className={styles['form-button']}>
          Crear
        </button>
        </form>
        <Link to="/home" className={styles['form-button']}>
          Inicio
        </Link>
      </div>
      <div className={styles['right-content']}>
        <img src={Formpage} alt="FormaPage" className={styles['forma-page-image']} />
      </div>
    </div>
  );
};

export default FormPage;