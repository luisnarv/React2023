/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const CityContext = createContext();

const URL = "http://localhost:8000";

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fecthCities() {
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}/cities`);
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

  async function GetCities(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("there was an error loading data");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        setCurrentCity,
        GetCities,
        createCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCiti() {
  const citiesContext = useContext(CityContext);
  if (citiesContext === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return citiesContext;
}

export { CityProvider, useCiti };
