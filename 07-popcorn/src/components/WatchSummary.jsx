export default function WatchSummary({ watched, average }) {
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
          <span>⭐{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⭐ {avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🕔 {avgRuntime} min </span>
        </p>
      </div>
    </div>
  );
}
