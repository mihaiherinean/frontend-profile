import { useState, useEffect } from "react";
import { IUser } from "../types/IUser";

interface IFetch {
  data: IUser[] | null,
  error: any,
  isPending: boolean
}

export function useFetch(url: string):IFetch {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("The data could not be fetched!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(true);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
}
