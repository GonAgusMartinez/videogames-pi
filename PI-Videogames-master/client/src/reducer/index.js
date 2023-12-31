const initialState = {
  videoGames: [],
  videoGameDetail: undefined,
};

const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
const FETCH_VIDEOGAME_DETAIL = 'FETCH_VIDEOGAME_DETAIL';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videoGames: action.payload,
      };
    case CREATE_VIDEOGAME:
      return {
        ...state,
        videoGames: [...state.videoGames, action.payload],
      };
    case FETCH_VIDEOGAME_DETAIL:
      return {
        ...state,
        videoGameDetail: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;