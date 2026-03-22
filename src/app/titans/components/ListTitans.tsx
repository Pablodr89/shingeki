"use client";
import FiltersContainer from "@/components/FiltersContainer";
import { Alliance } from "@/interfaces";
import { useState } from "react";

export default function ListTitans() {
  const [searchText, setSearchText] = useState("");
  const [alliance, setAlliance] = useState<Alliance>(Alliance.ALL);
  return (
    <section className="flex flex-col gap-8 pb-20">
      <FiltersContainer
        searchText={searchText}
        setSearchText={setSearchText}
        alliance={alliance}
        setAlliance={setAlliance}
      />

      {/* <div className="flex flex-col items-center gap-8">
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
          </div> */}
    </section>
  );
}
