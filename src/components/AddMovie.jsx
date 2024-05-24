import { useEffect, useState } from "react";

// uuid FOR GENERATING UNIQUE id FOR NEW MOVIE
import { v4 as uuid } from "uuid";
function AddMovie({ setMovies }) {
  // Here in AddMovie ⬆️ component we receive setMovies as props (coming from App.jsx)

  // We define a STATE for each property that we will create for the new movie
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);
  const [genre, setGenre] = useState("");

  // (JUST FOR DEMONSTRATION, YOU DON'T NEED useEffect) ❗❗❗
  // useEffect is keeping track in its dependency array of any changes for all states, to then just console log it
  useEffect(() => {
    console.log("title", title);
    console.log("director", director);
    console.log("IMDB", IMDBRating);
    console.log("has oscars", hasOscars);
  }, [title, director, IMDBRating, hasOscars]);

  // handleSubmit function called on the onSubmit event handler in the <form></form>
  const handleSubmit = (event) => {
    // PREVENTS THE FORM FROM REFRESHING THE PAGE AND SENDING INPUT VALUES TO THE URL
    event.preventDefault();

    //Check if user has provided title and director
    // if not, function ends here and doesn't submit
    if (!title || !director) {
      alert("YOU HAVE TO FILL IN ALL FIELDS");
      return;
    }

    // define a new object with all the STATE values
    const newMovie = {
      title,
      director,
      IMDBRating,
      hasOscars,
      genre,
      _id: uuid(),
    };

    //update the movies array (coming as props from App.jsx)
    // keep the previous movies in the array by spreading them into a new array
    // but also, adding our newly created movie to the array
    setMovies((prev) => [newMovie, ...prev]);

    //reset all input fields
    setTitle("");
    setDirector("");
    setIMDBRating(0);
    setHasOscars(false);
    setGenre("");
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
            // all inputs with initial value corresponding to their state
            value={title}
            //when the input changes (we/user types in it) we set the state corresponding to the state (check input name 👍)
            onChange={(event) => setTitle(event.target.value)}
          />

          <label>Director: </label>
          <input
            type="text"
            name="director"
            // all inputs with initial value corresponding to their state
            value={director}
            //when the input changes (we/user types in it) we set the state corresponding to the state (check input name 👍)
            onChange={(event) => setDirector(event.target.value)}
          />

          <label>IMDB Rating: </label>
          <input
            type="number"
            name="IMDBRating"
            // all inputs with initial value corresponding to their state
            value={IMDBRating}
            //when the input changes (we/user types in it) we set the state corresponding to the state (check input name 👍)
            onChange={(event) => setIMDBRating(event.target.value)}
          />

          <label>Won Oscars: </label>
          <input
            type="checkbox"
            name="hasOscars"
            // all inputs with initial value corresponding to their state
            checked={hasOscars}
            //when the input changes (we/user types in it) we set the state corresponding to the state (check input name 👍)
            onChange={(event) => setHasOscars(event.target.checked)}
          />

          <select
            name="genre"
            // all inputs with initial value corresponding to their state
            value={genre}
            //when the input changes (we/user types in it) we set the state corresponding to the state (check input name 👍)
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
          {/* button HAS TO BE type="submit" to submit the form */}
          <button type="submit">Add a Movie</button>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
