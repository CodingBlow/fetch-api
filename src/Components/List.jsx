import React from "react";

function List(props) {
  return (
  
      <div className="coin">
        <h1>{props.name}</h1>
        <h1>{props.symbol}</h1>
        <img src={props.imgsrc} />
        <h1>₹ {props.price}</h1>
      </div>

  );
}

export default List;
