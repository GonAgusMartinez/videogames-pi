import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVideogames } from '../../actions/index';
import Loading from '../Loading/Loading';
import Error404 from '../Error 404/Error404';
import styles from './DetailPage.module.css';

const DetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const { videoGameDetail, loading, error } = useSelector((state) => state);
  const { id, name, image, platforms, description, releaseDate, rating, genres } = videoGameDetail || {};

  useEffect(() => {
    const videoGameId = match.params.id;
    dispatch(getVideogames(videoGameId));
  }, [dispatch, match.params.id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error404 message={`Error: ${error.message}`} />;
  }

  if (!videoGameDetail) {
    return <Error404 message="No se encontraron detalles del juego." />;
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