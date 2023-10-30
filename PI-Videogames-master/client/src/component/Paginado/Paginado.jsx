import React from 'react';

function Paginado({ totalGames, gamesPerPage, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => onPageChange(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}

export default Paginado;