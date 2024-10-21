export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVORITE":
      return {
        ...state,
        favorite: [action.payload, ...state.favorite],
      };
    case "REMOVE_MOVIE_FROM_FAVORITE":
      return {
        ...state,
        favorite: state.favoritet.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
