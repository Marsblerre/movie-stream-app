import { createSlice } from "@reduxjs/toolkit";
import { GetAiringShows, GetOnAirShows, GetPopularShows, GetTopRatedShows } from "./apiActions";

const initialState = {
  playing: [],
  status: "idle", // Add a status field for better control
  error: null,
  loading: false,
};

const createShowsSlice = (name, asyncAction) => {
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

export const airingShows = createShowsSlice("airingShows", GetAiringShows);
export const onAirShows = createShowsSlice("onAirShows", GetOnAirShows);
export const popularShows = createShowsSlice("popularShows", GetPopularShows);
export const topRatedShows = createShowsSlice("topRatedShows", GetTopRatedShows);

export const airingShowsReducer = airingShows.reducer;
export const onAirShowsReducer = onAirShows.reducer;
export const popularShowsReducer = popularShows.reducer;
export const topRatedShowsReducer = topRatedShows.reducer;
