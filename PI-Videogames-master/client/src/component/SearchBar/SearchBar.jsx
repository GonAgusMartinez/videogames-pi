import React, { useState } from 'react';
import styles from '../SearchBar/SearchBar.module.css';

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
    <div className={styles['search-bar-container']}>
      <input
        className={styles.input}
        type="text"
        placeholder="Busca tus juegos aquí"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className={styles['select-container']}>
        <select className={styles.select} value={selectedGenre} onChange={handleGenreChange}>
        <option value="all">Todos los géneros</option>
        <option value="Action">Acción</option>
        <option value="Indie">Indie</option>
        <option value="Adventure">Aventura</option>
        <option value="RPG">Juegos de Rol</option>
        <option value="Strategy">Estrategia</option>
        <option value="Shooter">Juegos de Disparos</option>
        <option value="Casual">Casuales</option>
        <option value="Simulation">Simuladores</option>
        <option value="Puzzle">Rompecabezas</option>
        <option value="Arcade">Arcade</option>
        <option value="Platformer">Plataformas</option>
        <option value="Massively Multiplayer">Multijugador</option>
        <option value="Racing">Carreras</option>
        <option value="Sports">Deportes</option>
        <option value="Fighting">Juegos de Pelea</option>
        <option value="Family">Familiares</option>
        <option value="Board Games">Juegos de Mesa</option>
        <option value="Educational">Educativos</option>
        <option value="Card">Juegos de Cartas</option>
        <option value="Creados">Creados</option>
        </select>
        <select className={styles.select} value={`${sortBy}-${sortOrder}`} onChange={handleSortChange}>
        <option value="name-asc">Nombre (A-Z)</option>
        <option value="name-desc">Nombre (Z-A)</option>
        <option value="rating-asc">Rating (Ascendente)</option>
        <option value="rating-desc">Rating (Descendente)</option>
        </select>
      </div>
      <button className={styles.button} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;