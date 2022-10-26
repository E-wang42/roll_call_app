import { useState, useEffect } from "react";
// import CardList from "./components/CardList/CardList";
// import Search from "./components/Search/Search";

function App() {
  const [input, setInput] = useState("");
  const [catsInfo, setCatsInfo] = useState([]);
  const [filteredCats, setFilteredCats] = useState(catsInfo);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setCatsInfo(data);
    };
    getUsers().catch(console.error);
  }, []);

  // catsInfo.map((catName, imageID, email) => {
  //   return;
  // });

  useEffect(() => {
    const newFilteredCats = catsInfo.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(input);
    });

    setFilteredCats(newFilteredCats);
  }, [catsInfo, input]);

  const handleChange = (e) => {
    const inputChange = e.target.value.toLocaleLowerCase();
    setInput(inputChange);
  };

  return (
    <section className="application">
      <h1>cat call</h1>
      {/* <Search handleChange={handleChange} /> */}
      {/* <CardList content={filteredCats} />
       */}
      <>
        {catsInfo.length > 0 && (
          <div className="cat__list">
            {catsInfo.map((cat) => (
              <div key={cat.id} className="cat__card">
                <h2>{cat.name}</h2>
                <img
                  src={`https://robohash.org/${cat.id}?set=set4&size=180x180`}
                  alt={cat.name}
                />
                <p>{cat.email}</p>
              </div>
            ))}
          </div>
        )}
      </>
    </section>
  );
}

export default App;
