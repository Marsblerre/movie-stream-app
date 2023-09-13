import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";
import axios from "axios";

const CardDetails = () => {
  const { id } = useParams();
  const [finalData, setFinalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bgImg, setBgImg] = useState(null)

  const [movieSuccess, setMovieSuccess] = useState(false);
  const [showsSuccess, setShowsSuccess] = useState(false);

  useEffect(() => {
    // Define your options
    const optionsMovie = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    const optionsShow = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
      },
    };
    // Make the first API call
    axios
      .request(optionsMovie)
      .then((response) => {
        setMovieSuccess(true);
        setFinalData(response.data);
        setLoading(false);
        setBgImg(finalData.backdrop_path);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    axios
      .request(optionsShow)
      .then((response) => {
        setShowsSuccess(true);
        setFinalData(response.data);
        setLoading(false);
        setBgImg(finalData.backdrop_path);

      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const convertMinsToHours = (minutes) => {
    if (isNaN(minutes) || minutes < 0) {
      return "Invalid input";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes} mins`;
    } else if (remainingMinutes === 0) {
      return `${hours} hr`;
    } else {
      return `${hours}hr ${remainingMinutes}mins`;
    }
  };

  return (
    <div className="card-detail-holder" style={
      movieSuccess || showsSuccess ? {
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${finalData.backdrop_path})`,
    } : null}>
      {loading ? (
        <p>Loading...</p>
      ) : movieSuccess ? (
        <div className="popular-movie-slider">
          <img
            src={`https://image.tmdb.org/t/p/original/${finalData.poster_path}`}
            className="poster"
          />

          <div className="popular-movie-slider-content">
            <h2 className="movie-name">{finalData.title}</h2> <br />
            <p className="movie-name">{finalData.tagline}</p>
            <p className="release">{finalData.release_date?.slice(0, 4)}</p>
            <ul className="category">
              {finalData.genres.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <p className="desc">{finalData.overview}</p>
            <div className="movie-info">
              <i className="fa fa-clock-o">
                &nbsp;&nbsp;&nbsp;
                <span>{convertMinsToHours(finalData.runtime)}</span>
              </i>
              <i className="fa fa-circle">
                &nbsp;&nbsp;&nbsp;
                <span>
                  Imdb: <b>{finalData.vote_average}/10</b>
                </span>
              </i>
            </div>
            <div className="movie-btns">
              <button>
                <i className="fa fa-play"></i> &nbsp; Watch trailer
              </button>
              {/* <button className="read-more">
                <i className="fa fa-circle"></i>{" "}
                <i className="fa fa-circle"></i>{" "}
                <i className="fa fa-circle"></i>&nbsp; Read more
              </button> */}
            </div>
          </div>
        </div>
      ) : showsSuccess ? (
        <div className="popular-movie-slider">
          <img
            src="https://imageio.forbes.com/blogs-images/scottmendelson/files/2014/10/2v00kg8.jpg?format=jpg&width=1200"
            className="poster"
          />

          <div className="popular-movie-slider-content">
            <p className="release">2017</p>
            <h2 className="movie-name">Interstellar</h2>
            <ul className="category">
              <p>Science fiction</p>
              <li>drama</li>
              <li>action</li>
            </ul>
            <p className="desc">
              Interstellar is a 2014 epic science fiction film co-written,
              directed, and produced by Christopher Nolan. It stars Matthew
              McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen
              Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future
              where humanity is embroiled in a catastrophic blight and famine,
              the film follows a group of astronauts who travel through a
              wormhole near Saturn in search of a new home for humankind.
            </p>

            <div className="movie-info">
              <i className="fa fa-clock-o">
                {" "}
                &nbsp;&nbsp;&nbsp;<span>164 min.</span>
              </i>
              <i className="fa fa-volume-up">
                {" "}
                &nbsp;&nbsp;&nbsp;<span>Subtitles</span>
              </i>
              <i className="fa fa-circle">
                {" "}
                &nbsp;&nbsp;&nbsp;
                <span>
                  Imdb: <b>9.1/10</b>
                </span>
              </i>
            </div>

            <div className="movie-btns">
              <button>
                <i className="fa fa-play"></i> &nbsp; Watch trailer
              </button>
              {/* <button className="read-more">
                <i className="fa fa-circle"></i>{" "}
                <i className="fa fa-circle"></i>{" "}
                <i className="fa fa-circle"></i>&nbsp; Read more
              </button> */}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardDetails;
