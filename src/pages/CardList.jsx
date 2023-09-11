import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(props.data.results);
    // console.log(props.data);
  }, [props.data]);

  return (
    <div className="category-container">
      <span className="list-text">{props.title}</span>

      <div className="movie-cards">
        {
          // console.log(data.results)
          // (data.results !== null) ?
          // Array.isArray(data.results) ?
          data?.map((item) => {
            return <Card props={item} />;
          })
        }
      </div>
    </div>
  );
};

export default CardList;
