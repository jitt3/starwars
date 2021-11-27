import { useState } from "react";

import { Character } from "./Character";

export const Film = ({ film }) => {
  const [isCharsOpen, setIsCharsOpen] = useState(false);

  const handleCharsToggle = () => {
    setIsCharsOpen((prevState) => !prevState);
  };
  return (
    <li>
      <h2>{film.title}</h2>
      {isCharsOpen ? (
        <>
          <ul>
            {film.characters.map((url) => (
              <Character key={url} url={url} />
            ))}
          </ul>
          <button onClick={handleCharsToggle}>Close Characters</button>
        </>
      ) : (
        <button onClick={handleCharsToggle}>View Characters</button>
      )}
    </li>
  );
};
