import { useEffect } from "react";
import { useRef } from "react";
import { useKey } from "./useKey";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  // useEffect(() => {
  //   function callback(e) {
  //     if (document.activeElement === inputEl.current) return;
  //     if (e.code === "Enter") {
  //       inputEl.current.focus();
  //       setQuery("");
  //       console.log(e, "holaaaaaaa");
  //     }
  //   }
  //   document.addEventListener("keydown", callback);
  //   return () => {
  //     document.addEventListener("keydown", callback);
  //   };
  // }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search movies ..."
      ref={inputEl}
    />
  );
}
