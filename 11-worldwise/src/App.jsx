import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Notfound from "./Pages/Notfound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./Components/City/ListCities/CityList";
import CountryList from "./Components/Country/CountryList/CountryList";
import City from "./Components/City/city/City";
import Form from "./Components/Form/Form";
import { CityProvider } from "./Contexts/CityContext";

function App() {
  return (
    <>
      <CityProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to={"cities"} />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />

              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </CityProvider>
    </>
  );
}

export default App;
