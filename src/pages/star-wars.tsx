import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "../services/planet.service";
import { useState } from "react";

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
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery<SwapiResponse>({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page, 10),
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data?.results.map((planet) => (
        <div key={planet.uid}>{planet.name}</div>
      ))}

      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default StarWars;
