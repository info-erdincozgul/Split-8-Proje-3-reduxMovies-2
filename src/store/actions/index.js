export const MOVIE_ORDER = 'MOVIE_ORDER';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export const movieOrder = (number) => {
  return { type: MOVIE_ORDER, payload: number };
};

export const addFavorites = () => {
  return { type: ADD_FAVORITES };
};

export const removeFavorites = (id) => {
  return { type: REMOVE_FAVORITES, payload: id };
};
