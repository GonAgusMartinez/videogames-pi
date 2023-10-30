import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Card/Card.module.css'; 

export default function Card(props) {
  const { name, image, genres } = props;

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Géneros: {genres.join(', ')}</p>
      <Link to={`/detail/:id`}>Ver detalles</Link>
    </div>
  );
}