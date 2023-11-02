// import { pizzaData } from "./data";
import "../index.css";

export default function Pizza(props) {
  console.log(props);
  return (
    <div className="pizzas">
      <img src={props.img} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}
