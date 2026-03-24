"use server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ListCharacters from "./components/ListCharacters";
import { getListCharacters } from "@/services/charactersService";

export default async function Characters({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; gender?: string; status?: string }>;
}) {
  const queryClient = new QueryClient();
  const { name, gender, status } = await searchParams;

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["listCharacters", { name, gender, status }],
    queryFn: ({ pageParam = 1 }) =>
      getListCharacters({
        pageParam,
        name: name,
        gender: gender,
        status: status,
      }),
    initialPageParam: 1,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ListCharacters />
    </HydrationBoundary>
  );
}
