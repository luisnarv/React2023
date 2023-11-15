import { useState } from "react";

export default function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult movies={movies} />
    </nav>
  );
}

function Logo() {
  return (
    <section className="logo">
      <span role="img">🍿</span>
      <h1>PopCorn</h1>
    </section>
  );
}
function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search movies ..."
    />
  );
}
function NumResult({ movies }) {
  return (
    <span style={{ fontWeight: "bold" }} className="num-results">
      Found {movies.length} results
    </span>
  );
}
