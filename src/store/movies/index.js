import { createSlice } from "@reduxjs/toolkit";
import { GetNowPlaying, GetPopularMovies, GetTopRatedMovies, GetUpcomingMovies } from "./apiActions";

const initialState = {
  playing: [],
  status: "idle", // Add a status field for better control
  error: null,
  loading: false,
};

const createMoviesSlice = (name, asyncAction) => {
  return createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(asyncAction.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.playing = action.payload;
        })
        .addCase(asyncAction.pending, (state) => {
          state.status = "loading"; // Use "loading" here
        })
        .addCase(asyncAction.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  });
};

export const nowPlaying = createMoviesSlice("nowPlaying", GetNowPlaying);
export const popularMovies = createMoviesSlice("popularMovies", GetPopularMovies);
export const topRatedMovies = createMoviesSlice("topRatedMovies", GetTopRatedMovies);
export const upcomingMovies = createMoviesSlice("upcomingMovies", GetUpcomingMovies);

export const nowPLayingReducer = nowPlaying.reducer;
export const popularMoviesReducer = popularMovies.reducer;
export const topRatedMoviesReducer = topRatedMovies.reducer;
export const upcomingMoviesReducer = upcomingMovies.reducer;
