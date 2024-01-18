import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";
import UserName from "../Features/user/UserName";

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 sm:px-6">
      <Link className="tracking-widest" to={"/"}>Fast React Pizza Co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
