import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export function getVideogames() {
  return function (dispatch) {
    return axios.get(`${BASE_URL}/videogames`)
      .then(response => {
        dispatch({ type: "GET_VIDEOGAMES", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "DB_ERROR", payload: "Error en la base de datos" });
      });
  };
}

export function searchVideogames(name) {
  return (dispatch) =>
    axios.get(`${BASE_URL}/videogames?name=${name}`)
      .then((response) => {
        dispatch({
          type: "SEARCH_VIDEOGAMES",
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({ type: "DB_ERROR", payload: "Error en la base de datos" });
      });
}

export function getVideogameById(id) {
  return (dispatch) =>
    axios.get(`${BASE_URL}/videogames/${id}`)
      .then((response) => {
        dispatch({
          type: "GET_VIDEOGAME_BY_ID",
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({ type: "DB_ERROR", payload: "Error en la base de datos" });
      });
}

export function getGenres() {
  return (dispatch) =>
    axios.get(`${BASE_URL}/genres`)
      .then((response) => {
        dispatch({
          type: "GET_GENRES",
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({ type: "DB_ERROR", payload: "Error en la base de datos" });
      });
}