import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import StarR from "./components/StarR";

//----------------------------components-----Navbar----------------
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResult from "./components/NumResult";

//----------------------------components-----Main----------------
import ListMovie from "./components/ListMovie";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

import WatchMovie from "./components/WatchMovie";
import WatchList from "./components/WatchList";
import WatchSummary from "./components/WatchSummary";
import Lmovie from "./components/Lmovie";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = "21ac3e2f";
// fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=spiderman`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("spiderman");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [selectID, setSelectID] = useState("");
  console.log(selectID);

  function handleSelectID(id) {
    setSelectID((selectID) => (id === selectID ? null : id));
  }
  function handleClosemovie() {
    setSelectID(null);
  }

  useEffect(
    function () {
      async function fetchMovie() {
        try {
          setError("");
          setIsloading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok)
            throw new Error("Something went wrong with fectching movies");

          const data = await res.json();
          console.log(data);
          if (data.Response === "False") throw new Error(data.Error);
          setMovies(data.Search);
          setIsloading(false);
        } catch (error) {
          console.log(error.message);
          setError(error.message);
        }
      }

      if (query.length < 4) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovie();
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />{" "}
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <ListMovie>
          {!isloading && !error && (
            <Movies>
              <Movie Onselect={handleSelectID} movie={movies} />
            </Movies>
          )}

          {isloading && !error && <Loader />}
          {error && <ErrorMessage message={error} />}
        </ListMovie>

        <WatchMovie>
          {selectID ? (
            <MovieDetails selectID={selectID} onClose={handleClosemovie} />
          ) : (
            <>
              <WatchSummary watched={watched} average={average} />
              <WatchList>
                <Lmovie movie={movies} />
              </WatchList>
            </>
          )}
        </WatchMovie>

        {/* <WatchMovie>
          <WatchSummary watched={watched} average={average} />
        </WatchMovie>
        <WatchMovie>
          <WatchList>
            <Lmovie movie={movies} />
          </WatchList>
        </WatchMovie> */}
      </Main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>📣</span>
      {message}
    </p>
  );
}

function MovieDetails({ selectID, onClose }) {
  const [movie, setMovie] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(
    function () {
      setLoad(true);
      async function getMovieID() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectID}`
        );
        const data = await res.json();
        console.log(data, "movieload");
        setMovie(data);
        setLoad(false);
      }
      getMovieID();
    },
    [selectID]
  );

  return (
    <div className="details">
      {load ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onClose}>
              &larr;
            </button>
            <img src={movie.Poster} alt={`Poster of ${movie.Movie} movie`} />

            <div className="details-overview">
              <h2>{movie.Title}</h2>
              <p>
                {movie.Released} &bull; {movie.Runtime}{" "}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐</span>
                {movie.imdbID} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarR maxRating={10} size={20} />
            </div>
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}
