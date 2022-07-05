import axios from "axios";
import { useEffect, useState } from "react";

export function useRequest(url: string) {
  const [data, setData] = useState<any>();

  try {
    useEffect(() => {
      axios.post(url).then((res) => {
        return setData(res);
      });
    }, []);
  } catch (error) {
    console.log(error);
  }
  return { data, setData };
}
