export default function Movie({ movie }) {
  return movie.map((mov) => (
    <li key={mov.Title}>
      <img src={mov.Poster} alt={mov.Title} />
      <h3>{mov.Title}</h3>
      <span>
        <p>🎞 {mov.Year}</p>
      </span>
    </li>
  ));
}
