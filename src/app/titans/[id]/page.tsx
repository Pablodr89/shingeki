"use server";
import { getTitan } from "@/services/titansService";
import TitanPage from "./components/TitanPage";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

export default async function Titan({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ["titan", id],
    queryFn: () => getTitan(id),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TitanPage id={id} />
    </HydrationBoundary>
  );
}
