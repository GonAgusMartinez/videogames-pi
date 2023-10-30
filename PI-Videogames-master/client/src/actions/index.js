export function getVideogames() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/videogames`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_VIDEOGAMES", payload: json });
      });
  };
}

export function searchVideogames(name) {
  return (dispatch) =>
    fetch(`http://localhost:3001/videogames?name=${name}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "SEARCH_VIDEOGAMES",
          payload: json,
        });
      });
}

export function getVideogameById(id) {
  return (dispatch) =>
    fetch(`http://localhost:3001/videogame/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_VIDEOGAME_BY_ID",
          payload: json,
        });
      });
}

export function getGenres() {
  return (dispatch) =>
    fetch(`http://localhost:3001/genres`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_GENRES",
          payload: json,
        });
      });
}
