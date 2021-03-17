import {useState, useEffect} from 'react';

export default function useLocalStorageNumber(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const valueString = window.localStorage.getItem(key);

    if (valueString) {
      setValue(Number(valueString));
    }
  }, [key]);

  useEffect(() => {
    const prev = window.localStorage.getItem(key);
    const next = String(value);
    if (prev !== next) {
      window.localStorage.setItem(key, next);
    }
  }, [key, value]);

  return [value, setValue];
}