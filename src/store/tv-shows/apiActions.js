import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A"; // Use environment variable for API key

const createAsyncThunkWithAxios = (name, url) =>
  createAsyncThunk(
    `tv-shows/${name}`, 
    async (config, thunkApi) => {
      try {
      const options = {
        method: "GET",
        url,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      const response = await axios(options);
      return response; // Assuming you want to return the data
    } catch (error) {
      // Handle errors here, e.g., dispatch an error action
      throw error;
    }
  });

export const GetAiringShows = createAsyncThunkWithAxios(
  "getAiringShows",
  "https://api.themoviedb.org/3/tv/airing_today"
);

export const GetOnAirShows = createAsyncThunkWithAxios(
  "getOnAirShows",
  "https://api.themoviedb.org/3/tv/on_the_air"
);

export const GetPopularShows = createAsyncThunkWithAxios(
  "getPopularShows",
  "https://api.themoviedb.org/3/tv/popular"
);

export const GetTopRatedShows = createAsyncThunkWithAxios(
  "getTopRatedShows",
  "https://api.themoviedb.org/3/tv/top_rated"
);
