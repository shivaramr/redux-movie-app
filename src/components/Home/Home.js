import React, { memo, useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchasyncMovies,
  fetchasyncShows,
  loading,
} from "../../features/movies/movieSlice";

const movieText = "fast";
const showText = "friends";

const Home = memo(() => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);

  useEffect(() => {
    dispatch(fetchasyncMovies(movieText));
    dispatch(fetchasyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      {isLoading ? <div className="loading">...Loading</div> : <MovieListing />}
    </div>
  );
});

export default Home;
