import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../config/api";
import { apiKey } from "../../config/apiKey";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  //  AXIOS URL CALL
  // http://www.omdbapi.com/?i=${movieId}&${apiKey}
  // http://www.omdbapi.com/?i=tt0372784&apikey=APIKEY

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    API.get(`?i=${movieId}&${apiKey}`).then((res) => {
      console.log(res);
      setMovie(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Movie Details</h1>
      <p>Director: {movie.Director}</p>
      <img src={movie.Poster} alt="" />
    </div>
  );
};

export default MovieDetails;
