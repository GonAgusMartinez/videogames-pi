import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideoGameDetail, getVideoGames } from '../actions';
import SearchBar from '../component/SearchBar';
import Card from '../component/Card';
import Paginado from '../component/Paginado';

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
    <div>
      <h1>Video Games</h1>
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
        <div>
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
    </div>
  );
};

export default HomePage;