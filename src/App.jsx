import "./App.css";
import EditMovie from "./components/EditMovie";
import MovieList from "./components/MovieList";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import moviesDataJSON from "./assets/movies-data.json";
function App() {
  //INITIAL STATE OF MOVIES ARRAY
  const [movies, setMovies] = useState(moviesDataJSON);

  return (
    <div className="App">
      <h1>React forms!</h1>
      <Routes>
        {/* ROUTES FOR MOVIES LIST AND EDIT MOVIE GET movies AND setMovies AS PROPS */}
        <Route
          path="/"
          element={<MovieList movies={movies} setMovies={setMovies} />}
        />
        <Route
          path="/movies/edit/:movieId"
          element={<EditMovie movies={movies} setMovies={setMovies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
