import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Card/Card.module.css'; 

const Card = ({ game }) => {
  return (
    <div className={styles.card}>
      <img src={game.image} alt={game.name} />
      <h2 className={styles.cardTitle}>{game.name}</h2>
      <p className={styles.cardGenres}>Genres: {game.genres.join(', ')}</p>
      <Link to={`/detail/${game.id}`} className={styles.cardLink}>Ver detalles</Link>
    </div>
  );
};

export default Card;