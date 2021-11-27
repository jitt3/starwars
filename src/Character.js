import { useEffect, useState } from "react";

import { getUrl } from "./api";

export const Character = ({ url }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const populateChar = async () => {
      const data = await getUrl(url);
      setCharacter(data);
    };
    populateChar();
  }, [url]);

  return <li>{character ? character.name : "Loading"}</li>;
};
