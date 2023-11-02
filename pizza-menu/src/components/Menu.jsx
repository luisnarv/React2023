import Pizza from "./Pizza";
import { pizzaData } from "./data";
import "../index.css";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our menú</h2>
      <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        img="img/focaccia.jpg"
        price={pizzaData[1].price}
      />
      <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        img="img/margherita.jpg"
        price={pizzaData[2].price}
      />
    </main>
  );
}
