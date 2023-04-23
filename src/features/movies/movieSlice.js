import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

export const fetchasyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchasyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchasyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchasyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state, { payload }) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchasyncMovies.pending]: (state, { payload }) => {
      // console.log("Pending")
      return { ...state, isLoading: true };
    },
    [fetchasyncShows.pending]: (state, { payload }) => {
      // console.log("Pending")
      return { ...state, isLoading: true };
    },
    [fetchasyncMovies.fulfilled]: (state, { payload }) => {
      // console.log("Fetched successfully");
      return { ...state, movies: payload, isLoading: false };
    },
    [fetchasyncMovies.rejected]: () => console.log("Rejected"),
    [fetchasyncShows.fulfilled]: (state, { payload }) => {
      // console.log("Fetched successfully");
      return { ...state, shows: payload, isLoading: false };
    },
    [fetchasyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      // console.log("Fetched successfully");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const loading = (state) => state.movies.isLoading;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
