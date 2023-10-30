import React from 'react';
import styles from '../Paginado/Paginado.module.css';

function Paginado({ totalGames, gamesPerPage, currentPage, onPageChange }) {
  const pageNumbers = Math.ceil(totalGames / gamesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles['paginado-container']}>
      <button
        className={`${styles['paginado-button']} ${currentPage === 1 ? styles['disabled'] : ''}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <button
        className={`${styles['paginado-button']} ${currentPage === pageNumbers ? styles['disabled'] : ''}`}
        onClick={handleNextPage}
        disabled={currentPage === pageNumbers}
      >
        Siguiente
      </button>
    </div>
  );
}

export default Paginado;