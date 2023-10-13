const initialState = {
  videoGames: [],
  videoGameDetail: undefined, 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VIDEOGAMES':
      return {
        ...state,
        videoGames: action.payload,
      };
    case 'CREATE_VIDEOGAME':
      return {
        ...state,
        videoGames: [...state.videoGames, action.payload],
      };
    case 'GET_VIDEOGAME_DETAIL':
      return {
        ...state,
        videoGameDetail: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;