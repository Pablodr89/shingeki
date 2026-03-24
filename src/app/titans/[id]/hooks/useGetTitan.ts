import { TitanApiItem } from "@/interfaces/titansInterface";
import { getTitan } from "@/services/titansService";
import { useQuery } from "@tanstack/react-query";

export const useGetTitan = (id: string) => {
  const { data, isLoading } = useQuery<TitanApiItem>({
    queryKey: ["titan", id],
    queryFn: () => getTitan(id),
  });

  return { data, isLoading };
};
