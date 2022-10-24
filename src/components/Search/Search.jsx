import React, { useRef, useState } from "react";
import "./Search.css";

function Search(props) {
  const inputRef = useRef(null);

  function clearInput() {
    inputRef.current.value = "";
  }

  return (
    <div className="container__input">
      <input
        className="container__input--field"
        type="search"
        placeholder="Search Cats"
        name="text"
        onChange={props.handleChange}
        ref={inputRef}
      />
      <button onClick={clearInput} className="input__button">
        &times;
      </button>
    </div>
  );
}

export default Search;
