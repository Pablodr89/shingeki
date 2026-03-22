import Image from "next/image";
import { icons } from "@/images";
import { Dispatch, SetStateAction } from "react";
import { Alliance, Gender, Status } from "@/interfaces";

interface SearchBarProps {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  setGenderFilter?: Dispatch<SetStateAction<Gender>>;
  setStatusFilter?: Dispatch<SetStateAction<Status>>;
  setAlliance?: Dispatch<SetStateAction<Alliance>>;
}

export default function SearchBar({
  searchText,
  setSearchText,
  setGenderFilter,
  setStatusFilter,
  setAlliance,
}: SearchBarProps) {
  return (
    <div className="flex flex-col gap-2 flex-1 w-full group">
      <label className="block text-[10px] uppercase tracking-widest text-outline font-bold">
        Buscar personaje
      </label>

      <div className="relative">
        <Image
          src={icons.search}
          alt="Search"
          width={24}
          height={24}
          className="absolute left-0 top-1/3 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"
        />

        <input
          className="w-full bg-transparent outline-none border-0 border-b-2 border-outline-variant pl-8 pb-1 text-on-surface transition-all"
          placeholder="Ingrese nombre"
          inputMode="search"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setGenderFilter?.(Gender.ALL);
            setStatusFilter?.(Status.ALL);
            setAlliance?.(Alliance.ALL);
          }}
        />
      </div>
    </div>
  );
}
