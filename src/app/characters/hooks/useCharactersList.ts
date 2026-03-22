import { useInfiniteQuery } from "@tanstack/react-query";
import { getListCharacters } from "@/services/charactersService";
import { CharacterResponse } from "@/interfaces/charactersInterface";

export const useCharactersList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["listCharacters"],
      queryFn: getListCharacters,
      initialPageParam: 1,
      getNextPageParam: (lastPage: CharacterResponse) => {
        if (!lastPage.info.next_page) return undefined;
        const url = new URL(lastPage.info.next_page);
        return Number(url.searchParams.get("page"));
      },
    });

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading };
};
