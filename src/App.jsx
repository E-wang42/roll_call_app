import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";

function App() {
  const [input, setInput] = useState("");
  const [catsInfo, setCatsInfo] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setCatsInfo(data);
    };
    getUsers().catch(console.error);
  }, []);

  catsInfo.forEach((cat) => {
    return cat.name;
  });

  // const filteredCats = catsInfo.filter((cat) => {
  //   return cat.name.toLocaleLowerCase().includes(input);
  // });

  const handleChange = (e) => {
    const inputChange = e.target.value.toLocaleLowerCase();
    setInput(inputChange);
  };

  return (
    <section className="application">
      <h1>cat call</h1>
      <Search handleChange={handleChange} />
    </section>
  );
}

export default App;
