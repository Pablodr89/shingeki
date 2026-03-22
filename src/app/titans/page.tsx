import { getListTitans } from "@/services/titansService";
import ListTitans from "./components/ListTitans";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Titans() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["listTitans"],
    queryFn: getListTitans,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ListTitans />
    </HydrationBoundary>
  );
}
