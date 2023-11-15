import { useState } from "react";
export default function Main({ movies, watched, average }) {
  return (
    <main className="main">
      <Listmovie movies={movies} />
      <WatchMovie watched={watched} average={average} />
    </main>
  );
}

function Listmovie({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <Movies movies={movies} />}
    </div>
  );
}

function Movies({ movies }) {
  return (
    <ul className="list">
      {movies.map((e) => (
        <Movie mov={e} />
      ))}
    </ul>
  );
}

function Movie({ mov }) {
  return (
    <li>
      <img src={mov.Poster} alt={mov.Title} />
      <h3>{mov.Title}</h3>
      <span>
        <p>🎞 {mov.Year}</p>
      </span>
    </li>
  );
}

//----------------------------------------------************---------------------------------------

function WatchMovie({ watched, average }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchSummary watched={watched} average={average} />
          <WatchList watched={watched} />
        </>
      )}
    </div>
  );
}

function WatchSummary({ watched, average }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>movies you watched</h2>
      <div>
        <p>
          <span>🎞 {watched.length} Movies </span>
        </p>
        <p>
          <span>⭐{avgImdbRating}</span>
        </p>
        <p>
          <span>⭐ {avgUserRating}</span>
        </p>
        <p>
          <span>🕔 {avgRuntime} min </span>
        </p>
      </div>
    </div>
  );
}

function WatchList({ watched }) {
  return (
    <ul className="list">
      {watched.map((e) => (
        <Lmovie movie={e} />
      ))}
    </ul>
  );
}

function Lmovie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <span>
        <p>🎞 {movie.Year}</p>
      </span>
    </li>
  );
}
