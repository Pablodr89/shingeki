import { useInfiniteQuery } from "@tanstack/react-query";
import { getListCharacters } from "@/services/charactersService";
import { CharacterResponse } from "@/interfaces/charactersInterface";

export const useCharactersList = (filters: {
  name?: string;
  gender?: string;
  status?: string;
}) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: [
      "listCharacters",
      { name: filters.name, gender: filters.gender, status: filters.status },
    ],
    queryFn: ({ pageParam = 1 }) =>
      getListCharacters({ pageParam, ...filters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: CharacterResponse) => {
      if (!lastPage.info.next_page) return undefined;
      const url = new URL(lastPage.info.next_page);
      return Number(url.searchParams.get("page"));
    },
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  };
};
