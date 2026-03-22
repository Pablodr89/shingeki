import { Titan } from "@/mappers/titansMapper";
import { getListTitans } from "@/services/titansService";
import { useQuery } from "@tanstack/react-query";

export const useTitansList = () => {
  const { data, isLoading } = useQuery<Titan[]>({
    queryKey: ["listTitans"],
    queryFn: getListTitans,
  });

  return { data, isLoading };
};
