import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

function CardList(props) {
  return (
    <section className="cardlist__section">
      {props.content.map((cat) => {
        return <Card cat={cat} />;
      })}
    </section>
  );
}

export default CardList;
