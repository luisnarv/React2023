import { useState } from "react";

export function useGeolocation() {
  const [position, setPosition] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function GetPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((lacation) => {
      setPosition({
        lat: lacation.coords.latitude,
        long: lacation.coords.longitude,
      });
    });
    setIsLoading(false);
  }

  return { position, error, isLoading, GetPosition };
}
