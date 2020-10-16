
import React, { useState } from "react";
import MovieCard from "./MovieCard.js";

export default function MovieSearch() {

  const [query, setQuery] = useState("");  
  const [movies, setMovies] = useState([]);

  const searchMovieDb = async (e) => {

    e.preventDefault();

    const API_KEY = "79dd94bf66051958ef1992b4c9111342";
    const adult = "include_adult=false";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&${adult}`;

    try {
      
      const res = await fetch(url);
      const data = await res.json();

      if (typeof(data.results) !== 'undefined') {
        setMovies(data.results);
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovieDb}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Citizen Kane"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {
          movies.filter((movie) => movie.poster_path)
               .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        }
      </div>
    </div>
  );
}
