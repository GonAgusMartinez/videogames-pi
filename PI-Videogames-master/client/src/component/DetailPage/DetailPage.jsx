import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getVideogames,} from '../../actions/index'; 
import styles from '../DetailPage/DetailPage.module.css';

const DetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const { videoGameDetail, loading, error } = useSelector((state) => state.videoGameDetail);
  const { id, name, image, platforms, description, releaseDate, rating, genres } = videoGameDetail || {};

  useEffect(() => {
    const videoGameId = match.params.id;
    dispatch(getVideogames(videoGameId)); 
  }, [dispatch, match.params.id]);

  if (loading) {
    return (
      <div className={styles.loading}>Cargando...</div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>Error: {error.message}</div>
    );
  }

  if (!videoGameDetail) {
    return (
      <div className={styles.noDetails}>No se encontraron detalles del juego.</div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <h1 className={styles.title}>{name}</h1>
      <img src={image} alt={name} className={styles.detailImage} />
      <p>ID: {id}</p>
      <p>Plataformas: {platforms.join(', ')}</p>
      <p>Descripción: {description}</p>
      <p>Fecha de Lanzamiento: {releaseDate}</p>
      <p>Rating: {rating}</p>
      <p>Géneros: {genres.join(', ')}</p>
    </div>
  );
};

export default DetailPage;