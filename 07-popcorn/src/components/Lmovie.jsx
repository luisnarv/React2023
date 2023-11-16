export default function Lmovie({ movie }) {
  return movie.map((movie) => (
    <li key={movie.Title}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <span>
        <p>🎞 {movie.Year}</p>
      </span>
    </li>
  ));
}
