import React, { useState } from 'react';

const SearchBar = ({ onSearch, onFilterChange, onSortChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all'); 
  const [sortBy, setSortBy] = useState('name'); 
  const [sortOrder, setSortOrder] = useState('asc'); 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm, selectedGenre, sortBy, sortOrder);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    onFilterChange(searchTerm, e.target.value, sortBy, sortOrder);
  };

  const handleSortChange = (e) => {
    const [newSortBy, newSortOrder] = e.target.value.split('-');
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    onSortChange(searchTerm, selectedGenre, newSortBy, newSortOrder);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busca tus juegos aquí"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option value="all">Todos los géneros</option>
        <option value="action">Acción</option>
        <option value="adventure">Aventura</option>
        {/* Agrega más géneros según tu necesidad */}
      </select>
      <select value={`${sortBy}-${sortOrder}`} onChange={handleSortChange}>
        <option value="name-asc">Nombre (A-Z)</option>
        <option value="name-desc">Nombre (Z-A)</option>
        <option value="rating-asc">Rating (Ascendente)</option>
        <option value="rating-desc">Rating (Descendente)</option>
      </select>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;