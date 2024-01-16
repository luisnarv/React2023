import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Luis</p>
    </header>
  );
}
