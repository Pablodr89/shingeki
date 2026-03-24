"use client";
import FiltersContainer from "@/components/FiltersContainer";
import { useEffect, useRef, useState } from "react";
import { useCharactersList } from "../hooks/useCharactersList";
import CardListCharacters from "./CardListCharacter";
import Spinner from "@/components/Spinner/Spinner";
import { Character } from "@/mappers/charactersMapper";
import { Gender, Status } from "@/interfaces";

export default function ListCharacters() {
  const [searchText, setSearchText] = useState("");
  const [genderFilter, setGenderFilter] = useState<Gender>(Gender.ALL);
  const [statusFilter, setStatusFilter] = useState<Status>(Status.ALL);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useCharactersList();

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
    <section className="flex flex-col gap-8 pb-20 pt-40">
      <FiltersContainer
        searchText={searchText}
        setSearchText={setSearchText}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="flex flex-col items-center gap-8">
        {isLoading ? (
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
