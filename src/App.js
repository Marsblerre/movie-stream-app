import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Footer from "./components/Footer";
import TvShows from "./pages/TvShows";
import CardDetails from "./pages/CardDetails";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/search/:keyword" element={ <SearchResults />} />
         

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
