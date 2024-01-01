import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Notfound from "./Pages/Notfound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./Components/City/ListCities/CityList";
import CountryList from "./Components/Country/CountryList/CountryList";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fecthCities() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("there was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }

    fecthCities();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList data={cities} loading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList data={cities} loading={isLoading} />}
            />
            <Route
              path="countries"
              element={<CountryList data={cities} loading={isLoading} />}
            />
            <Route path="form" element={<p>Forms</p>} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
