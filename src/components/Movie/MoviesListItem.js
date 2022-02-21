import React from "react";
import { Link } from "react-router-dom";

const NO_IMAGE_FOUND = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";

const MoviesListItem = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? NO_IMAGE_FOUND : movie.Poster;

  return (
    <Link to={`/movieDetails/${movie.imdbID}`}>
      <h2>{movie.Title}</h2>
      <img width="200" src={poster} alt={`The movie title: ${movie.Title}`} />
    </Link>
  );
};

export default MoviesListItem;
