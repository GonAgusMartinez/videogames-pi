import React from 'react';

function Card({ game }) {
  return (
    <li key={game.id}>
      <img src={game.image} alt={game.name} />
      <h3>{game.name}</h3>
      <p>Géneros: {game.genres.join(', ')}</p>
    </li>
  );
}

export default Card;