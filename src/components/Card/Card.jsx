import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card__container">
      <h2>{props.name}</h2>
      <img
        src={`https://robohash.org/${props.id}?set=set4&size=180x180`}
        alt={props.name}
      />
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
