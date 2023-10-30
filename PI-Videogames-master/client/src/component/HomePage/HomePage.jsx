import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; //
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import Error404 from '../Error 404/Error404'; 
import Paginado from '../Paginado/Paginado';
import styles from '../HomePage/HomePage.module.css'; 

const HomePage = () => {
  const dispatch = useDispatch();
  const { videoGames, loading, error } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const [currentGames, setCurrentGames] = useState([]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    dispatch(videoGames(searchTerm));
  };

  const handleFilterChange = (selectedGenre, sortBy, sortOrder) => {
    if (videoGames) {
      let filteredGames = [...videoGames];

      if (selectedGenre !== 'all') {
        filteredGames = filteredGames.filter((game) => {
          return game.genres.includes(selectedGenre);
        });
      }

      if (sortBy === 'name') {
        filteredGames.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
      } else if (sortBy === 'rating') {
        filteredGames.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.rating - b.rating;
          } else {
            return b.rating - a.rating;
          }
        });
      }

      setCurrentGames(filteredGames);
    }
  };

  const handleSortChange = (newSortBy, newSortOrder) => {
    if (videoGames) {
      let sortedGames = [...videoGames];

      if (newSortBy === 'name') {
        sortedGames.sort((a, b) => {
          if (newSortOrder === 'asc') {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
      } else if (newSortBy === 'rating') {
        sortedGames.sort((a, b) => {
          if (newSortOrder === 'asc') {
            return a.rating - b.rating;
          } else {
            return b.rating - a.rating;
          }
        });
      }

      setCurrentGames(sortedGames);
    }
  };

  console.log('card:', Card);
  console.log('loading:', Loading);
  console.log('error:', Error404);
  console.log('paginado:', Paginado);
  console.log('currentGames:', currentGames);
  console.log (HomePage)

  const indexOfLastGame = currentGames ? Math.min(currentPage * gamesPerPage, currentGames.length) : 0;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const displayedGames = currentGames ? currentGames.slice(indexOfFirstGame, indexOfLastGame) : [];

  return (
    <div className={styles['homepage-container']}>
      <div className={styles['top-container']}>
        <h1 className={styles['title']}>GameOn</h1>
        <div className={styles['buttons-container']}>
          <Link to="/form" className={styles['button-link']}>Crear</Link>
          <Link to="/info" className={styles['button-link']}>Info</Link>
        </div>
      </div>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error404 />
      ) : (
        <div className={styles['cards-container']}>
          {displayedGames.length > 0 ? (
            displayedGames.map
            ((game) => {
              console.log('game:', game);
             return <Card key={
            game.id
            } game={game} />;
                 })
               ) : null}
        </div>
      )}
      {displayedGames.length > 0 && (
        <Paginado
          totalGames={currentGames ? currentGames.length : 0}
          gamesPerPage={gamesPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
      <Link to="/detail/1" className={styles['button-link']}>
        Ir a la DetailPage
      </Link>
    </div>
  );
};

export default HomePage;