import { useState } from "react";
export default function Search() {
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
