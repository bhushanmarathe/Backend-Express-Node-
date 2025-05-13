import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import axios from "axios"; //to fetch data from backend to frontend
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Chai aur full stack</h1>
      <p>Jokes:{jokes.length}</p>
      {jokes.map(
        (
          joke //Used  () instead of {} to show data on the ui
        ) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        )
      )}
    </>
  );
}

export default App;
