"use client";
import FiltersContainer from "@/components/FiltersContainer";
import { useEffect, useRef, useState } from "react";
import { useCharactersList } from "../hooks/useCharactersList";
import CardListCharacters from "./CardListCharacter";
import Spinner from "@/components/Spinner/Spinner";
import { Character } from "@/mappers/charactersMapper";
import { Gender, Status } from "@/interfaces";
import { useRouter, useSearchParams } from "next/navigation";

export default function ListCharacters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("name") ?? "");
  const [genderFilter, setGenderFilter] = useState<Gender>(
    (searchParams.get("gender") as Gender) ?? Gender.ALL,
  );
  const [statusFilter, setStatusFilter] = useState<Status>(
    (searchParams.get("status") as Status) ?? Status.ALL,
  );
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useCharactersList({
    name: searchText,
    gender: genderFilter,
    status: statusFilter,
  });
  const loaderRef = useRef<HTMLDivElement>(null);

  //TODO: Refactor
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams();

      if (searchText.trim() !== "") {
        params.set("name", searchText);
      }

      if (genderFilter !== Gender.ALL) {
        params.set("gender", genderFilter);
      }

      if (statusFilter !== Status.ALL) {
        params.set("status", statusFilter);
      }

      const newQuery = params.toString();
      const currentQuery = searchParams.toString();

      if (newQuery !== currentQuery) {
        router.push(`?${newQuery}`, { scroll: false });
      }
    }, 500);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, genderFilter, statusFilter, router]);

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
    <section className="animate-in flex flex-col gap-8 pb-20 pt-28 px-5 lg:px-0 lg:pt-40">
      <FiltersContainer
        searchText={searchText}
        setSearchText={setSearchText}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="flex flex-col items-center gap-8">
        {isError ? (
          <p className="text-2xl font-bold italic text-emerald-100 uppercase tracking-widest font-headline">
            No se ha encontrado ningún personaje con tus criterios
          </p>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.pages.map((page) =>
              page.results.map((character: Character) => (
                <CardListCharacters key={character.id} character={character} />
              )),
            )}
          </div>
        )}

        <div
          ref={loaderRef}
          className="h-10 flex w-full items-center justify-center"
        >
          {isFetchingNextPage && <Spinner />}
        </div>
      </div>
    </section>
  );
}
