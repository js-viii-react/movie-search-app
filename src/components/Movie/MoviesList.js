import React from "react";
import MoviesListItem from "./MoviesListItem";

const MoviesList = ({ movies }) => {
  return (
    <div className="movie-wrapper">
      {movies.map((movie) => (
        <MoviesListItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
