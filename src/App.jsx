import { useState, useEffect, useMemo } from "react";
import Search from "./components/Search/Search";

function App() {
  const [catsInfo, setCatsInfo] = useState([]);
  const [input, setInput] = useState("");

  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setCatsInfo(data);
  };

  useEffect(() => {
    try {
      getUsers();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const filteredCats = useMemo(() => {
    return catsInfo.filter((cat) => {
      return cat.name.toLowerCase().includes(input.toLowerCase());
    });
  }, [catsInfo, input]);

  return (
    <section className="application">
      <div className="heading__container">
        <h1>cat</h1>
        <img
          className="heading__img"
          src="https://i.ibb.co/74VCLrv/paw-removebg-preview.png"
          alt="meow"
        />
        <h1>call</h1>
      </div>

      <Search
        handleChange={(e) => setInput(e.target.value)}
        inputValue={input}
        placeholderText="Search for Cats by Name..."
      />

      {catsInfo.length > 0 && (
        <div className="cat__list">
          {filteredCats.map((cat) => (
            <div key={cat.id} className="cat__card">
              <h2>{cat.name}</h2>
              <img
                src={`https://robohash.org/${Math.floor(
                  (Math.random() + 4.2) * cat.id
                )}?set=set4&size=180x180`}
                alt={cat.name}
              />
              <p>{cat.email}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default App;
