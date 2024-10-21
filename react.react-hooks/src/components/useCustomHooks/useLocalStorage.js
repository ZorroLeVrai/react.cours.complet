import { useState, useEffect } from "react";

function getLocalStorageValue(key, initialValue) {
  const localStorageValue = localStorage.getItem(key);

  if (localStorageValue)
    return JSON.parse(localStorageValue);

  if (initialValue instanceof Function)
    return initialValue();

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => getLocalStorageValue(key, initialValue));

  useEffect(() => { localStorage.setItem(key, JSON.stringify(data)) }, [key, data]);

  return [data, setData];
}