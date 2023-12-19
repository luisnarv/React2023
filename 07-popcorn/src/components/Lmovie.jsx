export default function Lmovie({ movie, onDelete }) {
  //   return movie.map((movie) => (
  //     <li key={movie.Title}>
  //       <img src={movie.Poster} alt={movie.Title} />
  //       <h3>{movie.Title}</h3>
  //       <span>
  //         <p>🎞 {movie.Year}</p>
  //       </span>
  //     </li>
  //   ));
  // }
  return movie.map((movie) => (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <div>
        <span>
          <p>⭐</p>
          <p>{movie.imdbRating}</p>
        </span>

        <span>
          <p>⭐</p>
          <p>{movie.userRating}</p>
        </span>

        <span>
          <p>⌛</p>
          <p>{movie.runtime}</p>
        </span>
        <button className="btn-delete" onClick={() => onDelete(movie.imdbID)}>
          X
        </button>
      </div>
    </li>
  ));
}
