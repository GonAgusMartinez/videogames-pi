import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideoGameDetail, getVideoGames } from '../../actions/index';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import styles from '../HomePage/HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { videoGames, loading, error } = useSelector((state) => state.videoGames);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    dispatch(getVideoGames(searchTerm));
  };

  useEffect(() => {
    dispatch(fetchVideoGameDetail(currentPage, searchTerm));
  }, [dispatch, currentPage, searchTerm]);

  const indexOfLastGame = videoGames ? Math.min(currentPage * gamesPerPage, videoGames.length) : 0;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = videoGames ? videoGames.slice(indexOfFirstGame, indexOfLastGame) : [];

  return (
    <div className={styles['homepage-container']}>
      <h1 className={styles['title']}>VideoJuegos</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
      />
      {loading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className={styles['cards-container']}>
          {currentGames.length > 0 ? (
            currentGames.map((game) => (
              <Card key={game.id} game={game} />
            ))
          ) : (
            <div>No se encontraron juegos</div>
          )}
        </div>
      )}
      {currentGames.length > 0 && (
        <Paginado
          totalGames={videoGames ? videoGames.length : 0}
          gamesPerPage={gamesPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
      <Link to="/form" className={styles['button-link']}>Crear Nuevo Videojuego</Link>
    </div>
  );
};

export default HomePage;