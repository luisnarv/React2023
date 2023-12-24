import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    const LocalValue = localStorage.getItem(key);
    return LocalValue ? JSON.parse(LocalValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
