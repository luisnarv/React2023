import Pizza from "./Pizza";
import "../index.css";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our menú</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}
