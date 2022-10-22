import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";

function App() {
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   async function getUsers() {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setUser(data);
  //   }
  //   getUsers();
  // }, []);

  return (
    <section className="application">
      <h1>cat call</h1>
      <Search />
      <Card />
    </section>
  );
}

export default App;
