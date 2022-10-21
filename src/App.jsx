import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      // console.log(data);
      setUser(data.name);
    }
    getUsers();
  }, []);

  return <div className="app">App Goes Here</div>;
}

export default App;
