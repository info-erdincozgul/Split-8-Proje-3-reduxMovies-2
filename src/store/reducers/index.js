import { movies } from '../../data.js';
import {
  MOVIE_ORDER,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from '../actions/index.js';

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_ORDER:
      return {
        ...state,
        sira: state.sira + action.payload,
      };
    case ADD_FAVORITES:
      const currentMovie = state.movies[state.sira];
      return {
        ...state,
        favMovies: [...state.favMovies, currentMovie],
        movies: state.movies.filter((movie) => movie.id !== currentMovie.id),
        sira:
          state.movies.length - state.sira == 1
            ? state.sira == 0
              ? 0
              : state.sira - 1
            : state.sira,
      };
    case REMOVE_FAVORITES:
      const currentFavorites = state.favMovies.find(
        (movie) => movie.id == action.payload
      );
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id != action.payload
        ),
        movies: [...state.movies, currentFavorites],
      };
    default:
      return state;
  }
}
