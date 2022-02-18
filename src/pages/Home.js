import axios from "axios";
import React, { useEffect, useReducer } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loading from "../components/Loading/Loading";
import MoviesList from "../components/Movie/MoviesList";
import Search from "../components/Search/Search";
import API from "../config/api";
import { apiKey } from "../config/apiKey";
import { initialState, reducer } from "../reducer";
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_FAILED,
  SEARCH_MOVIES_SUCCESS,
} from "../reducer/types";

const Home = () => {
  // const [state, dispatch] = useReducer(reducerName, initialState (e.g. []))
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { movies, errorMessage, loading } = state;

  const handleMovieSearch = (movie) => {
    console.log("handleMovieSearch", movie);
    // http://www.omdbapi.com/?s=batman&apikey=APIKEY

    API.get(`?s=${movie}&${apiKey}`).then((res) => {
      console.log(res.data);
      if (res.data.Response === "True") {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: SEARCH_MOVIES_FAILED,
          payload: res.data.Error,
        });
      }
    });
  };

  useEffect(() => {
    handleMovieSearch("batman");
  }, []);

  return (
    <div>
      <Search handleMovieSearch={handleMovieSearch} />
      {loading && !errorMessage ? (
        <Loading />
      ) : errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default Home;
