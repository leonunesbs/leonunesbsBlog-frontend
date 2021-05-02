import useSWR, { SWRConfiguration } from "swr";
import { fetchAPI } from "../libs";

const useFetch = (url: string, config?: SWRConfiguration) => {
  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      const response = await fetchAPI(url);
      const data = await response.json();

      return data;
    },
    { ...config, refreshWhenHidden: true }
  );

  return { data, error, mutate };
};

export default useFetch;
