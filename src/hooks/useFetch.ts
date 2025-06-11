import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    console.log("fetching", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      //narrowing
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
        } else if (typeof err === "string") {
          setError(err);
        } else {
          setError("Une erreur est survenue.");
        }
      })
      .finally(() => setLoading(false));
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
