import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import { CityProvider } from "./Contexts/CityContext";
import { useAuth } from "./Contexts/FakeAuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";

const HomePage = lazy(() => import("./Pages/HomePage"));
const Product = lazy(() => import("./Pages/Product"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const Login = lazy(() => import("./Pages/Login"));
const Notfound = lazy(() => import("./Pages/Notfound"));

// import HomePage from "./Pages/HomePage";
// import Product from "./Pages/Product";
// import Pricing from "./Pages/Pricing";
// import Login from "./Pages/Login";
// import Notfound from "./Pages/Notfound";

import AppLayout from "./Pages/AppLayout";
import CityList from "./Components/City/ListCities/CityList";
import CountryList from "./Components/Country/CountryList/CountryList";
import City from "./Components/City/city/City";
import Form from "./Components/Form/Form";
import SpinnerFullPage from "./Components/Loading/LoadingFullPage/LoadingFullPage";

function App() {
  const { isAuntheticated } = useAuth();

  return (
    <>
      <CityProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {" "}
                {isAuntheticated && (
                  <>
                    <Route index element={<Navigate replace to={"cities"} />} />
                    <Route path="cities" element={<CityList />} />
                    <Route path="cities/:id" element={<City />} />
                    <Route path="countries" element={<CountryList />} />
                    <Route path="form" element={<Form />} />
                  </>
                )}
              </Route>

              <Route path="*" element={<Notfound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CityProvider>
    </>
  );
}

export default App;
