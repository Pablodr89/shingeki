"use server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ListCharacters from "./components/ListCharacters";
import { getListCharacters } from "@/services/charactersService";

export default async function Characters() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["listCharacters"],
    queryFn: getListCharacters,
    initialPageParam: 1,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ListCharacters />
    </HydrationBoundary>
  );
}
