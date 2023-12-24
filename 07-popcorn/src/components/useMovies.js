import { useState, useEffect } from "react";
const KEY = "21ac3e2f";

export function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setError("");
          setIsloading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fectching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error(data.Error);
          setMovies(data.Search);
          setIsloading(false);
          setError("");
        } catch (error) {
          //console.log(error.message);
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        }
      }

      if (query.length < 4) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovie();

      return () => {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isloading, error };
}
