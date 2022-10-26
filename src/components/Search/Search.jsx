import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="container__input">
      <input
        className="container__input--field"
        type="search"
        placeholder={props.placeholderText}
        name="text"
        value={props.inputValue}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Search;
