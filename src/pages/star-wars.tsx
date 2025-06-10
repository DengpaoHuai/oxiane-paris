import useFetch from "../hooks/useFetch";

type SwapiResponse = {
  message: string;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

export type Planet = {
  uid: number;
  name: string;
  url: string;
};

const StarWars = () => {
  const { loading, data, error } = useFetch<SwapiResponse>(
    "https://swapi.tech/api/planets"
  );

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data?.results.map((planet) => (
        <div key={planet.uid}>{planet.name}</div>
      ))}
    </div>
  );
};

export default StarWars;
