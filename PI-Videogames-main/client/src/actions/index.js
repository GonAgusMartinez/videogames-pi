import axios from 'axios';

export const getVideoGames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://rawg.io/apidocs/videogames'); 
      dispatch({
        type: 'GET_VIDEOGAMES',
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createVideoGame = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://rawg.io/apidocs/videogames', formData); 
      dispatch({
        type: 'CREATE_VIDEOGAME',
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchVideoGameDetail = async (id) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
    });

    if (response.status === 200) {
      const videoGameData = response.data;


      return videoGameData;
    } else {
      throw new Error('Error al obtener los detalles del juego');
    }
  } catch (error) {
    console.error('Error en la solicitud de la api', error);
    throw error;
  }
};