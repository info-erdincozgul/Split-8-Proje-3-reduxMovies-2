import { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Movie from './components/Movie.jsx';
import FavMovie from './components/FavMovie.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, movieOrder } from './store/actions/index.js';

function App() {
  const sira = useSelector((store) => store.sira);
  const movies = useSelector((store) => store.movies);
  const favMovies = useSelector((store) => store.favMovies);
  const dispatch = useDispatch();
  function sonrakiFilm(number) {
    dispatch(movieOrder(number));
  }
  const addFavoritesHandler = () => {
    dispatch(addFavorites());
  };
  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Movies
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          My List
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          {movies.length == 0 ? (
            <div className="text-center">There are no movies left...</div>
          ) : (
            <>
              <Movie sira={sira} />
              <div className="flex gap-3 justify-end py-3">
                {sira > 0 && (
                  <button
                    onClick={() => {
                      sonrakiFilm(-1);
                    }}
                    className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                  >
                    Previous
                  </button>
                )}
                {movies.length > sira + 1 && (
                  <button
                    onClick={() => {
                      sonrakiFilm(1);
                    }}
                    className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                  >
                    Next
                  </button>
                )}

                <button
                  className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
                  onClick={addFavoritesHandler}
                >
                  Add My List
                </button>
              </div>{' '}
            </>
          )}
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
