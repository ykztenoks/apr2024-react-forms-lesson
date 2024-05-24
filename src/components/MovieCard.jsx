// src/components/MovieCard.jsx

import { Link } from "react-router-dom";

//MovieCard components receives the movie object from props, coming from MovieList
function MovieCard(props) {
  //destructure movie from props
  //same as function MovieCard({movie}){}
  const { movie } = props;

  return (
    // displays movie information
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      <p>
        has oscars?
        {/* ternary operator to check if movie has oscars, and show a trophy icon if true and a X if false */}
        {movie.hasOscars ? <span>🏆</span> : <span>❌</span>}
      </p>
      <p>
        Genre:
        {/* ternary operator to check if movie has genre, if true display, if false, custom string  */}
        {movie.genre ? (
          <span> {movie.genre}</span>
        ) : (
          <span> Genre was not specified</span>
        )}
      </p>

      {/* LINK TO GO TO EDIT MOVIE PAGE, SENDING THE ID TO THE URL */}
      {/* this action triggers the EditMovie component to appear */}
      <Link to={`/movies/edit/${movie._id}`}>
        <button>Edit movie</button>
      </Link>
    </div>
  );
}

export default MovieCard;
