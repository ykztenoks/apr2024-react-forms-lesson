import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// EditMovie receives ⬇️movies and ⬇️setMovies from props (from App.jsx)
function EditMovie({ movies, setMovies }) {
  // destructure movieId coming in the URL PARAMS
  const { movieId } = useParams();

  // navigate instance, used to navigate to movies list when form is submitted
  const navigate = useNavigate();

  // initial movie that will be edit state
  // initial value is set to the object of the movie that corresponds with the movieId coming from params
  // we use find() method to find the movie object that we want to edit
  // to apply find() method we use the original movies array, coming from props
  const [movieToEdit, setMovieToEdit] = useState(
    movies.find((movie) => movie._id === movieId)
  );

  // handleSubmit function, fired upon submission of the <form>

  const handleSubmit = (event) => {
    // we always want to event.preventDefault() to prevent the browser from refreshing and setting URL params / query strings
    event.preventDefault();

    // modify the original movies array state that is displaying all movies in MovieList
    // different approach using map() method to return all elements in the array
    // but checking once we find the movie with the id of the movie we are editing (if(movie._id === movieId))
    // and assign the object of the edited movie (movie = movieToEdit)

    // this way, we return all the same elements, but replace one of the movies with our edited version
    setMovies((prev) =>
      prev.map((movie) => {
        if (movie._id === movieId) {
          movie = movieToEdit;
        }
        return movie;
      })
    );

    //navigate used to go back to homepage (MovieList)
    navigate("/");
  };
  return (
    <div>
      <h1>Add movie</h1>
      <div className="AddMovie">
        <h4>Add a Movie</h4>
        {/* form element must have onSubmit handler, calling our handleSubmit function */}

        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            // all inputs with initial value corresponding to the property in the movieToEdit state
            value={movieToEdit.title}
            onChange={(event) =>
              setMovieToEdit((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />

          <label>Director: </label>
          <input
            type="text"
            name="director"
            // all inputs with initial value corresponding to the property in the movieToEdit state
            value={movieToEdit.director}
            // different onChange approach
            // we set the entire movieToEdit object state keeping all the other properties {...prev}
            // but changing the property that matches with input name to the e.target.value [e.target.name] i.e: {title: "Input value"}
            onChange={(event) =>
              setMovieToEdit((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />

          <label>IMDB Rating: </label>
          <input
            type="number"
            name="IMDBRating"
            step={0.1}
            // all inputs with initial value corresponding to the property in the movieToEdit state
            value={movieToEdit.IMDBRating}
            // different onChange approach
            // we set the entire movieToEdit object state keeping all the other properties {...prev}
            // but changing the property that matches with input name to the e.target.value [e.target.name] i.e: {title: "Input value"}
            onChange={(event) =>
              setMovieToEdit((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />

          <label>Won Oscars: </label>
          <input
            type="checkbox"
            name="hasOscars"
            // all inputs with initial value corresponding to the matching property in the movieToEdit state
            checked={movieToEdit.hasOscars}
            // different onChange approach
            // we set the entire movieToEdit object state keeping all the other properties {...prev}
            // but changing the property that matches with input name to the e.target.value [e.target.name] i.e: {title: "Input value"}
            onChange={(event) =>
              setMovieToEdit((prev) => ({
                ...prev,
                [event.target.name]: event.target.checked,
              }))
            }
          />
          {/* always have a button type="submit" to submit the form and call handleSubmit function */}
          <button type="submit">Edit the movie!</button>
        </form>
      </div>
    </div>
  );
}

export default EditMovie;
