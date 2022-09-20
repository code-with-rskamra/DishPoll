import { useEffect, useState } from "react";

const getSavedData = (key, initialValue) => {
  const receivedValue = JSON.parse(localStorage.getItem(key));
  if (receivedValue) {
    return receivedValue;
  }
  return initialValue;
};

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => getSavedData(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
