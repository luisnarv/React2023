export default function NumResult({ movies }) {
  return (
    <span style={{ fontWeight: "bold" }} className="num-results">
      Found {movies.length} results
    </span>
  );
}
