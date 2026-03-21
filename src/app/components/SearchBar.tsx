import Image from "next/image";
import { icons } from "../images";

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

export default function SearchBar({
  searchText,
  setSearchText,
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
          placeholder="Enter name or ID..."
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
}
