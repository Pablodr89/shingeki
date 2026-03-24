"use server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CharacterPage from "./components/CharacterPage";
import { getCharacter } from "@/services/charactersService";

export default async function Character({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacter(id),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CharacterPage id={id} />
    </HydrationBoundary>
  );
}
