import { createSlice } from "@reduxjs/toolkit";
import { GetAiringShows, GetOnAirShows, GetPopularShows, GetTopRatedShows } from "./apiActions";

export const airingShows = createSlice({
  name: "airingShows",
  initialState: {
    playing: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetAiringShows.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.playing = action.payload;
    })
    .addCase(GetAiringShows.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(GetAiringShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});
export const onAirShows = createSlice({
  name: "onAirShows",
  initialState: {
    playing: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetOnAirShows.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.playing = action.payload;
    })
    .addCase(GetOnAirShows.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(GetOnAirShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});
export const popularShows = createSlice({
  name: "popularShows",
  initialState: {
    playing: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetPopularShows.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.playing = action.payload;
    })
    .addCase(GetPopularShows.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(GetPopularShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});
export const topRatedShows = createSlice({
  name: "topRatedShows",
  initialState: {
    playing: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetTopRatedShows.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.playing = action.payload;
    })
    .addCase(GetTopRatedShows.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(GetTopRatedShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const airingShowsReducer = airingShows.reducer;
export const onAirShowsReducer = onAirShows.reducer;
export const popularShowsReducer = popularShows.reducer;
export const topRatedShowsReducer = topRatedShows.reducer;