import Pizza from "./Pizza";
import { pizzaData } from "./data";
import "../index.css";
import React from "react";

export default function Menu() {
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our menú</h2>
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            {" "}
            "Deliciosas pizzas recién horneadas, un bocado de Italia en cada
            rebanada."
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza, index) => (
              <Pizza pizzaObject={pizza} key={index} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Estamos trabajando en nuestro Menú, por favor vuelve más tarde.</p>
      )}

      {/* <Pizza
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
      /> */}
    </main>
  );
}
