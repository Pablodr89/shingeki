"use client";
import FiltersContainer from "@/components/FiltersContainer";
import { Alliance } from "@/interfaces";
import { useMemo, useState } from "react";
import { useTitansList } from "../hooks/useTitansList";
import Spinner from "@/components/Spinner/Spinner";
import CardListTitans from "./CardListTitans";
import { Titan } from "@/mappers/titansMapper";
import { useFilteredTitans } from "../hooks/useFilteredTitans";

export default function ListTitans() {
  const { data, isLoading } = useTitansList();
  const [searchText, setSearchText] = useState("");
  const [alliance, setAlliance] = useState<Alliance>(Alliance.ALL);
  const filteredTitans = useFilteredTitans(data, searchText, alliance);

  return (
    <section className="flex flex-col gap-8 pb-20">
      <FiltersContainer
        searchText={searchText}
        setSearchText={setSearchText}
        alliance={alliance}
        setAlliance={setAlliance}
      />

      <div className="flex flex-col items-center gap-8">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTitans?.map((titan: Titan) => (
              <CardListTitans key={titan.id} titan={titan} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
