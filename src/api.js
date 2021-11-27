export const getUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const fetchFilms = async () => {
  const url = "https://swapi.dev/api/films";
  const data = await getUrl(url);

  return data;
};
