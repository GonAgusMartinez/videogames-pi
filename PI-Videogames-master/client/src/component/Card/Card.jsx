import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ game }) => {
  return (
    <div className="card">
      <img src={game.image} alt={game.name} />
      <h2>{game.name}</h2>
      <p>Genres: {game.genres.join(', ')}</p>
      <Link to={`/detail/${game.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Card;