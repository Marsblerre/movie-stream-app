import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const { id } = useParams();
  
  return (
    <div>
      <div>CardDetails</div>
      <p>Additional Data: {id}</p>
      {/* <div>ID: {id}</div> */}
    </div>
  );
};

export default CardDetails;
