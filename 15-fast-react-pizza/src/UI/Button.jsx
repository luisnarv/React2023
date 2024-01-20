import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Button({ children, disabled, to, type }) {
  //const styles = { base:"inline-block font-semibold uppercase text-stone-800 tracking-wide rounded-full bg-yellow-400 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4",

  const base =
    " text-sm inline-block font-semibold uppercase text-stone-800 tracking-wide rounded-full bg-yellow-400 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  ";
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm font-semibold uppercase text-stone-400 tracking-wide border-2 border-stone-300 rounded-full transition-colors duration-300 hover:bg-stone-300 focus:text-stone-800 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        Order pizzas
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
