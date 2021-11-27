// Instructions:
// 1. Fetch the apiURL to get a list of star wars films on page load.
// 2. Display the title of each film in an unordered list (<ul>).
// 3. Add a button to each list element (<li>) that, upon click,
//    will show the name of all characters in the movie.
// 4. Feel free to google whatever you want. I'm not looking for
//    perfect memory of everything. I only want to know how you
//    approach problems.
//
// Notes:
// * Feel free to disregard styles completely.
// * You can google everything you want. Stack Overflow,
//   MDN, react docs... you name it. Just do let me know what
//   you are looking for.
// * Don't be afraid of asking questions. I'm here to help.

import { useEffect, useState } from "react";

import { fetchFilms } from "./api";
import { Film } from "./Film";
import "./styles.css";

export default function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const populatefilms = async () => {
      const data = await fetchFilms();
      setFilms(data.results);
    };
    populatefilms();
  }, []);

  return (
    <div className="App">
      <div id="intro">
        <h1>StarWars films</h1>
        <p>A long time ago, in a galaxy far, far away...</p>
      </div>

      <div id="list">
        <h2>Movie List:</h2>
        <ul>
          {films.map((film) => (
            <Film key={film.episode_id} film={film} />
          ))}
        </ul>
      </div>
    </div>
  );
}
