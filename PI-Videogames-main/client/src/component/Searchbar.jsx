import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideoGames } from '../actions'; 

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getVideoGames(searchTerm));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busca tus juegos aqui"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;