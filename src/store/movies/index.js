import { createSlice } from "@reduxjs/toolkit";
import { GetNowPlaying, GetPopularMovies, GetTopRatedMovies, GetUpcomingMovies } from "./apiActions";

export const nowPLaying = createSlice({
  name: "nowPLaying",
  initialState: {
    playing: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetNowPlaying.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.playing = action.payload;
    })
    .addCase(GetNowPlaying.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(GetNowPlaying.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});
export const popularMovies = createSlice({
  name: "popularMovies",
  initialState: {
    playing: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetPopularMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.playing = action.payload;
    })
    .addCase(GetPopularMovies.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(GetPopularMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});
export const topRatedMovies = createSlice({
  name: "topRatedMovies",
  initialState: {
    playing: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetTopRatedMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.playing = action.payload;
    })
    .addCase(GetTopRatedMovies.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(GetTopRatedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const upcomingMovies = createSlice({
  name: "upcomingMovies",
  initialState: {
    playing: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetUpcomingMovies.fulfilled, (state, action) =>{
      state.status = "succeeded";
      state.playing = action.payload;
    })
    .addCase(GetTopRatedMovies.pending, (state) => {
      state.loading = 'loading';
    })
    .addCase(GetTopRatedMovies.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }

})

export const nowPLayingReducer = nowPLaying.reducer;
export const popularMoviesReducer = popularMovies.reducer;
export const topRatedMoviesReducer = topRatedMovies.reducer;
export const upcomingMoviesReducer = upcomingMovies.reducer;
