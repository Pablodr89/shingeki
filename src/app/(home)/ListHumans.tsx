"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import CardListHumans from "../components/CardListHumans";
import FiltersContainer from "../components/FiltersContainer";
import { HumanResponse } from "../interfaces/humanInterface";
import { getListHumans } from "../services/listHumansService";
import { useEffect, useRef } from "react";

export default function ListHumans() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["listHumans"], // misma key que en el servidor
      queryFn: getListHumans,
      initialPageParam: 1,
      getNextPageParam: (lastPage: HumanResponse) => {
        if (!lastPage.info.next_page) return undefined;
        const url = new URL(lastPage.info.next_page);
        return Number(url.searchParams.get("page"));
      },
    });
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return (
    <section className="flex flex-col gap-8 pb-20">
      <FiltersContainer />

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.pages.map((page) =>
            page.results.map((human) => (
              <CardListHumans key={human.id} human={human} />
            )),
          )}
        </div>

        <div
          ref={loaderRef}
          className="h-10 flex w-full items-center justify-center"
        >
          {isFetchingNextPage && <p>Cargando más...</p>}
        </div>
      </div>
    </section>
  );
}
