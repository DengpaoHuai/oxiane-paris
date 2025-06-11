/*import { useState } from "react";
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
  const [page, setPage] = useState<number>(1);
  const { loading, data, error } = useFetch<SwapiResponse>(
    `https://swapi.tech/api/planets?page=${page}&limit=10`
  );

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data?.results.map((planet) => (
        <div key={planet.uid}>{planet.name}</div>
      ))}
      {data?.next && (
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      )}
      {data?.previous && (
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
      )}
    </div>
  );
};

export default StarWars;
*/
