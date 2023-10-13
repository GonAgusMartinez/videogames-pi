import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideoGameDetail, getVideoGames } from '../actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const { videoGames, loading, error } = useSelector((state) => state.videoGames);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    dispatch(getVideoGames(searchTerm));
  };

  useEffect(() => {
    dispatch(fetchVideoGameDetail(currentPage, searchTerm));
  }, [dispatch, currentPage, searchTerm]);

  return (
    <div>
      <h1>Video Games</h1>
      <div>
        <input
          type="text"
          placeholder="Busca tus juegos aquí"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {loading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>Tus juegos van aquí</div>
      )}
    </div>
  );
};

export default HomePage;