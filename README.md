# React Redux Movie Project
## About the Project
This project is a movie database application developed with React and Redux, featuring a centralized state management architecture. Users can view a list of movies, see their details, add movies to their own list, and remove them. The most important feature of the application is that all application state is managed by the Redux Store in a single, central location.

The project uses React Router for page navigation and Tailwind CSS for a modern, mobile-responsive user interface design. This gives both the state management and UI layers a modern and scalable structure.
## Key Features
* Centralized State Management: The Redux Store holds all application data in a single location, including the list of movies (movies), the list of favorite movies (favMovies), and the index of the movie being displayed (sira).
* Movie Management:
    * The App.jsx component displays movies based on the sira value in the Redux Store and allows navigation between movies with "Next" and "Previous" buttons.
    * The Movie.jsx component displays the current movie's poster, title, director, actors, genre, year, and duration.
    * Movies are managed via the reducer located in store/reducers/index.js.
* Favorites Management:
    * Users can add the displayed movie to their list with the "Add to my list" button. This action is handled by the ADD_FAVORITES action.
    * The FavMovie.jsx component represents each movie in the favorites list. Users can remove movies from the list with the "Remove" button, which triggers the REMOVE_FAVORITES action.
* Navigation (Routing): React Router is used within App.jsx to enable navigation between the "Movies" (/) and "My List" (/listem) pages.
* State Selection and Update: The useSelector and useDispatch hooks from the react-redux library allow components to access the state and update it by dispatching actions.
## Project Structure
src/:
* App.jsx: The main component of the application, which connects to the Redux Store and contains the React Router routing logic.
* components/: Houses the application's interface components.
    * Movie.jsx: The component that displays the details of a single movie.
    * FavMovie.jsx: The component that displays the movies in the favorites list.
* store/: The directory that organizes Redux state management.
    * actions/index.js: Defines action types and action creators for movie and favorite operations.
    * reducers/index.js: Manages the movies, favMovies, and sira states within a single reducer.
    * store.js: Creates the Redux store and includes the redux-logger middleware.
## How to Run
To run this project on your local machine, you need to have Node.js and npm installed.
1. Install Required Packages:
```
Bash
npm install
```
2. Start the Application:
```
Bash
npm run dev
```
3. View in Browser: After running the command, your project will typically open automatically at http://localhost:5173/
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* You will learn the fundamentals of Redux, a predictable state container for JavaScript apps. The project demonstrates how to set up a Redux store, define a reducer to manage state changes, and use actions to dispatch updates. You'll see how to access the global state from any component using the useSelector hook and dispatch actions with the useDispatch hook.
* You will learn how to connect a React application to a Redux store using the react-redux library. This project shows how the Provider component makes the Redux store available to the entire component tree, enabling components like App, Movie, and FavMovie to interact with the global state without prop drilling.
* You will learn to build a clean, modular application using a component-based structure. The project separates concerns into distinct components like Movie for displaying movie details and FavMovie for managing favorite movies, making the codebase more organized and easier to maintain.
* You will learn to implement client-side navigation using React Router DOM. The project defines routes for the main movie list (/) and the favorite movies list (/listem), allowing for seamless navigation without a full page reload. The NavLink component is used to provide active link styling.