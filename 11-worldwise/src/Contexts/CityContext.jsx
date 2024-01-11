/* eslint-disable react/prop-types */
import { useCallback, useContext, useReducer } from "react";
import { createContext, useEffect } from "react";

const CityContext = createContext();

const URL = "http://localhost:8000";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "city/loading":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/create":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.paylaod],
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    case "error":
      return { ...state, error: action.payload };

    default:
      break;
  }
}

function CityProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fecthCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        dispatch({ type: "city/loading", payload: data });
      } catch (error) {
        dispatch({
          type: "error",
          payload: "there was an error loading cities",
        });
        alert("there was an error loading cities");
      }
    }

    fecthCities();
  }, []);

  const GetCities = useCallback(
    async function GetCities(id) {
      if (currentCity.id === Number(id)) return;

      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: "there was an error loading city" });
        alert("there was an error loading city");
      }
    },
    [currentCity.id]
  );
  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/create", paylaod: data });
    } catch (error) {
      dispatch({ type: "error", payload: "there was an error creating city" });
      console.error(error.message);
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
      // setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      dispatch({ type: "error", payload: "there was an error deleting city" });
      alert("there was an error deleting city");
    }
  }
  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        // setCurrentCity,
        GetCities,
        createCity,
        deleteCity,
        error,
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
