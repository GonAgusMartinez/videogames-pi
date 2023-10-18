import React, { useEffect } from 'react';
import styles from '../Paginado/Paginado.module.css';

const Paginado = ({ totalGames, gamesPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalGames / gamesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    if (currentPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [currentPage, totalPages, onPageChange]);

  return (
    <div className={styles['paginado-container']}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={currentPage === 1 ? styles['disabled'] : ''}
      >
        Anterior
      </button>
      <div className={styles['page-numbers']}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`${styles['paginado-button']} ${
              number === currentPage ? styles['active'] : ''
            }`}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? styles['disabled'] : ''}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginado;