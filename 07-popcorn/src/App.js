import { useEffect, useRef, useState } from "react";
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
import { useMovie } from "./components/useMovies";
import { useLocalStorageState } from "./components/useLocalStorageState";
import { useKey } from "./components/useKey";

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
  const { movies, isloading, error } = useMovie(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  const [selectID, setSelectID] = useState("");

  //console.log(movies, "esto es viendo ahora");

  function handleSelectID(id) {
    setSelectID((selectID) => (id === selectID ? null : id));
  }
  function handleClosemovie() {
    setSelectID(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatches(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

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
            <MovieDetails
              selectID={selectID}
              onClose={handleClosemovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchSummary watched={watched} average={average} />
              <WatchList>
                <Lmovie onDelete={handleDeleteWatches} movie={watched} />
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

function MovieDetails({ selectID, onClose, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [load, setLoad] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const countReft = useRef(0);

  useEffect(() => {
    if (userRating) countReft.current = countReft.current + 1;
  }, [userRating]);

  const isWatched = watched.map((e) => e.imdbID).includes(selectID);
  const watchUserRating = watched.find(
    (e) => e.imdbID === selectID
  )?.userRating;

  function handleAdd() {
    const newWatchMovie = {
      imdbID: selectID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      imdbRating: Number(movie.imdbRating),
      runtime: Number(movie.Runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countReft.current,
    };
    console.log(newWatchMovie, "new movie");
    onAddWatched(newWatchMovie);
    onClose();
  }

  useKey("Escape", onClose);

  // useEffect(() => {
  //   function callback(e) {
  //     if (e.code === "Escape") onClose();
  //   }
  //   document.addEventListener("keydown", callback);

  //   return () => {
  //     document.removeEventListener("keydown", callback);
  //   };
  // }, [onClose]);

  useEffect(
    function () {
      setLoad(true);
      async function getMovieID() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectID}`
        );
        const data = await res.json();

        setMovie(data);
        setLoad(false);
      }
      getMovieID();
    },
    [selectID]
  );

  useEffect(() => {
    if (!movie) return;
    document.title = `movie | ${movie.Title}`;

    return () => (document.title = "UsePopcorn");
  }, [movie]);

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
                {movie.imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarR maxRating={10} size={20} onSetRating={setUserRating} />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      +- Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchUserRating} <span>🌟 </span>
                </p>
              )}
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
