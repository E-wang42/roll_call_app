import React, { useRef, useState } from "react";
import "./Search.css";

function Search() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  // function focusInput() {
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     ref.current.focus();
  //   }, []);
  // }

  function inputEvent(e) {
    setValue(e.target.value);
  }

  function clearInput() {
    inputRef.current.value = "";
  }

  return (
    <div className="container__input">
      <input
        className="container__input--field"
        type="search"
        placeholder="Search Cats"
        value={value}
        name="text"
        onChange={inputEvent}
        ref={inputRef}
      />
      <button onClick={clearInput} className="input__button">
        &times;
      </button>
    </div>
  );
}

export default Search;
