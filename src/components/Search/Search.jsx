import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Search.css";

function Search() {
  // const [value, setValue] = useState("");

  // function focusInput() {
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     ref.current.focus();
  //   });
  // }

  // function clear() {
  //   if (!value) {
  //     setValue((prevValue) => (prevValue = ""));
  //   }
  //   return;
  // }

  return (
    <div className="container__input">
      <input
        className="container__input--field"
        type="search"
        placeholder="Search Cats"
        // value={value}
        name="text"
        // ref={focusInput}
      />
      <button className="input__button">&times;</button>
    </div>
  );
}

export default Search;
