import axios from 'axios';

const apiKey = '270a83c9d3744dc0a02c2c679389b07f';

export const getVideoGames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}`);
      dispatch({
        type: 'GET_VIDEOGAMES',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error al obtener la lista de videojuegos:', error);
    }
  };
};

export const createVideoGame = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`https://api.rawg.io/api/games?key=${apiKey}`, formData);
      dispatch({
        type: 'CREATE_VIDEOGAME',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error al crear el videojuego:', error);
    }
  };
};

export const fetchVideoGameDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);

      if (response.status === 200) {
        const videoGameData = response.data;
        dispatch({
          type: 'FETCH_VIDEOGAME_DETAIL',
          payload: videoGameData,
        });
      } else {
        console.error('Error al obtener los detalles del juego. El servidor respondió con estado:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud de la API al obtener detalles del juego:', error);
    }
  };
};