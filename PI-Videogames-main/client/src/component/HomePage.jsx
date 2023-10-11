import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideoGameDetail } from '../actions'; 
import Searchbar from './Searchbar'

const HomePage = () => {
  const dispatch = useDispatch();
  const { videoGames, loading, error } = useSelector((state) => state.videoGames);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchVideoGameDetail(currentPage, searchTerm));
  }, [dispatch, currentPage, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Video Games</h1>
      <Searchbar /> {/* Aquí inserta el componente Searchbar */}
      {/* Resto del contenido de la página principal */}
    </div>
  );
};

export default HomePage;