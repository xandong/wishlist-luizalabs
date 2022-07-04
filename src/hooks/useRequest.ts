import axios from "axios";
import { useEffect, useState } from "react";

export function useRequest<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);

  try {
    useEffect(() => {
      axios.get(url).then((res) => {
        setData(res.data.products);
      });
    }, []);
  } catch (error) {
    console.log(error);
  }
  return { data, setData };
}
