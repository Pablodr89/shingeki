import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "../services/ListHumansService";
import { ApiResponse } from "../services/ListHumansService";

export const useCharacters = () => {
  return useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage: ApiResponse) => {
      if (!lastPage.info.next_page) return undefined;
      // La URL es "...?page=2", extraemos el número
      const url = new URL(lastPage.info.next_page);
      return Number(url.searchParams.get("page"));
    },
  });
};
