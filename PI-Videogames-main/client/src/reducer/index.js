const initialState = {
  videoGames: [],
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
    default:
      return state;
  }
};

export default rootReducer;