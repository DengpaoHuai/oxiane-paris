export const getPlanets = async (page: number, limit: number) => {
  const response = await fetch(
    `https://swapi.tech/api/planets?page=${page}&limit=${limit}`
  );
  return response.json();
};
