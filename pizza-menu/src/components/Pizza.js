import { pizzaData } from "./data";
import "../index.css";

export default function Pizza() {
  return (
    <div className="pizzas">
      <img src="img/focaccia.jpg" alt="focaccia" />
      <h3>{pizzaData[1].name}</h3>
      <p>{pizzaData[1].ingredients}</p>
    </div>
  );
}
