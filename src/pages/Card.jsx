import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  // console.log(props.props);
  const [item, setItem] = useState(null);
  // useState(()=>{
  //   // console.log(props);
  //   setItem(props.props);
  //   console.log("ITEM>>>", item);
  // }, [props.props])
  // const id
  return (
    <div className="card">
      <Link to={`/card/${props.props.id}`}> 
      {/* <Link to={{
        pathname: `/card/${props.props.id}`,
        state: `${props.props.id}`,
      }}>  */}
      {/* {props.props.title} */}
      <div className="card-item">
        <div className="film-poster">
          <img
            title={props.props.title}
            className="film-poster-img lazyloaded"
            src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`}
          />
          <div className="appearOnHover">
            <div className="playIcon">
              <i class="fa-solid fa-play"></i>
            </div>
            <p className="description">
              {props.props.overview.slice(0, 150)}...
            </p>
          </div>
        </div>
        <div className="film-detail">
          <h3 className="film-name">
            <a href="#" title="Meg 2: The Trench">
              {props.props.title ? props.props.title : props.props.name}
            </a>
          </h3>
          <div className="fd-infor">
            <span className="fdi-item">{props.props.release_date}</span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
