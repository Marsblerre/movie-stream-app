import { configureStore } from "@reduxjs/toolkit";
import { nowPLayingReducer, popularMoviesReducer, topRatedMoviesReducer, upcomingMoviesReducer } from "./movies";
import { airingShowsReducer, onAirShowsReducer, popularShowsReducer, topRatedShowsReducer} from "./tv-shows";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'
const store = configureStore({
    reducer: {
        nowPLaying: nowPLayingReducer,
        popularMovies: popularMoviesReducer,
        topRatedMovies: topRatedMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
        airingShows: airingShowsReducer,
        onAirShows: onAirShowsReducer,
        popularShows: popularShowsReducer,
        topRatedShows: topRatedShowsReducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(false),
})

export default store;