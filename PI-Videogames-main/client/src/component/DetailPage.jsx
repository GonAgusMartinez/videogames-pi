import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideoGameDetail } from '../actions';

const DetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const { videoGameDetail, loading, error } = useSelector((state) => state.videoGameDetail);

  useEffect(() => {
    const videoGameId = match.params.id; 
    dispatch(fetchVideoGameDetail(videoGameId));
  }, [dispatch, match.params.id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!videoGameDetail) {
    return <div>No se encontraron detalles del juego.</div>;
  }

  const {
    id,
    name,
    image,
    platforms,
    description,
    releaseDate,
    rating,
    genres,
  } = videoGameDetail;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
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