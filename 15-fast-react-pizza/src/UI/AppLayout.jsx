import Header from "./Header";
import CartOverview from "../Features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

export default function AppLayout() {
  const navigate = useNavigation();

  const isLoading = navigate.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loading />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
