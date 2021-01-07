import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  const initial = data ? JSON.parse(data) : defaultValue;

  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
