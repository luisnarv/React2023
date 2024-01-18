import Header from "./Header";
import CartOverview from "../Features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

export default function AppLayout() {
  const navigate = useNavigation();

  const isLoading = navigate.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loading />}
      <Header />
      <div className="overflow-scroll">

      <main className="mx-auto  max-w-3xl">
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  );
}
