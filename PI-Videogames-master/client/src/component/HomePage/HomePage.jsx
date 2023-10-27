import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideoGameDetail, getVideoGames } from '../../actions/index';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import Error404 from '../Error 404/Error404'; 
import Paginado from '../Paginado/Paginado';
import styles from '../HomePage/HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { allVideoGames, loading, error } = useSelector((state) => state.videoGames);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const [currentGames, setCurrentGames] = useState([]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    dispatch(getVideoGames(searchTerm));
  };

  const handleFilterChange = (searchTerm, selectedGenre, sortBy, sortOrder) => {
    if (allVideoGames) {
      let filteredGames = [...allVideoGames];

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
    if (allVideoGames) {
      let sortedGames = [...allVideoGames];

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

  useEffect(() => {
    console.log("Fetching video game detail...");
    dispatch(fetchVideoGameDetail(currentPage, searchTerm));
    console.log("allVideoGames:", allVideoGames);
    console.log("loading:", loading);
    console.log("error:", error);
  }, [dispatch, currentPage, searchTerm, allVideoGames, loading, error]);

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
            displayedGames.map((game) => (
              <Card key={game.id} game={game} />
            ))
          ) : null
          }
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
    </div>
  );
};

export default HomePage;