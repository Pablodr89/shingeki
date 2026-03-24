import { CharacterApiItem } from "@/interfaces/charactersInterface";
import { getCharacter } from "@/services/charactersService";
import { useQuery } from "@tanstack/react-query";

export const useGetCharacter = (id: string) => {
  const { data, isLoading } = useQuery<CharacterApiItem>({
    queryKey: ["character", id],
    queryFn: () => getCharacter(id),
    enabled: !!id,
  });

  return { data, isLoading };
};
