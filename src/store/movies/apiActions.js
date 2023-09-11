import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import React from "react";

export const GetNowPlaying = createAsyncThunk(
  "GetNowPlaying",
  // config - view terefden gelen data ucun ozu obj, thunkAPi response ucun
  async (config, thunkApi) => {
    // console.log("works");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    const response = await axios(options)
    // console.log("GetNowPlaying >>> API CALL RESPONSE", response);
    return response;
    
  }
);


export const GetPopularMovies = createAsyncThunk(
  "GetPopularMovies",
  // config - view terefden gelen data ucun ozu obj, thunkAPi response ucun
  async (config, thunkApi) => {
    // console.log("works");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A'
      },
    };
    const response = await axios(options)
    // console.log("GetPopularMovies >>> API CALL RESPONSE", response);
    return response;
    
  }
);
export const GetTopRatedMovies = createAsyncThunk(
  "GetTopRatedMovies",
  // config - view terefden gelen data ucun ozu obj, thunkAPi response ucun
  async (config, thunkApi) => {
    // console.log("works");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A'
      },
    };
    const response = await axios(options)
    // console.log("GetTopRatedMovies >>> API CALL RESPONSE", response);
    return response;
    
  }
);
export const GetUpcomingMovies = createAsyncThunk(
  "GetTopRatedMovies",
  // config - view terefden gelen data ucun ozu obj, thunkAPi response ucun
  async (config, thunkApi) => {
    // console.log("works");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A'
      },
    };
    const response = await axios(options)
    // console.log("GetTopRatedMovies >>> API CALL RESPONSE", response);
    return response;
    
  }
);
