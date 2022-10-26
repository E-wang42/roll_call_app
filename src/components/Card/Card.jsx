import React from "react";
import "./Card.css";

function Card(props) {
  const { id, name, email } = props;
  return (
    <div className="card__container">
      <h2>{name}</h2>
      <img
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
        alt={name}
      />
      <p>{email}</p>
    </div>
  );
}

export default Card;
