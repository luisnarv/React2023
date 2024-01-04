/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const CityContext = createContext();

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

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

  async function GetCities(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("there was an error loading data");
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
