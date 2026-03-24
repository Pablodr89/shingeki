"use client";
import Spinner from "@/components/Spinner/Spinner";
import { useGetTitan } from "../hooks/useGetTitan";
import FormerInheritor from "./FormerInheritor";
import Header from "./Header";

export default function TitanPage({ id }: { id: string }) {
  const { data, isLoading } = useGetTitan(id);

  return (
    <div className="flex flex-col gap-20 py-20">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header data={data} />

          <FormerInheritor formerInheritors={data?.former_inheritors} />
        </>
      )}
    </div>
  );
}
