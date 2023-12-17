export default function Movie({ movie, Onselect }) {
  return movie.map((mov, index) => (
    <li
      onClick={() => {
        Onselect(mov.imdbID);
      }}
      key={mov.Title + index}
    >
      <img src={mov.Poster} alt={mov.Title} />
      <h3>{mov.Title}</h3>
      <span>
        <p>🎞 {mov.Year}</p>
      </span>
    </li>
  ));
}
