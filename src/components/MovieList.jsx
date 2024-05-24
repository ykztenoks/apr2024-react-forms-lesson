// src/components/MovieList.jsx

import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function MovieList({ movies, setMovies }) {
  return (
    <div>
      {/* MovieList RENDERS THE ADD MOVIE FORM COMPONENT
          AddMovie GETS setMovies AS PROPS
            - (when creating a movie, we will update the movies array to push/include the new movie) */}
      <AddMovie setMovies={setMovies} />

      <h2>Movie List</h2>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
