import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const apiKey = process.env.REACT_APP_TMDB_API_KEY; // Use environment variable for API key
const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A"; // Use environment variable for API key

const createAsyncThunkWithAxios = (name, url) =>
  createAsyncThunk(
    `movies/${name}`,
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
    }
  );

export const GetNowPlaying = createAsyncThunkWithAxios(
  "getNowPlaying",
  "https://api.themoviedb.org/3/movie/now_playing"
);

export const GetPopularMovies = createAsyncThunkWithAxios(
  "getPopularMovies",
  "https://api.themoviedb.org/3/movie/popular"
);

export const GetTopRatedMovies = createAsyncThunkWithAxios(
  "getTopRatedMovies",
  "https://api.themoviedb.org/3/movie/top_rated"
);

export const GetUpcomingMovies = createAsyncThunkWithAxios(
  "getUpcomingMovies",
  "https://api.themoviedb.org/3/movie/upcoming"
);
