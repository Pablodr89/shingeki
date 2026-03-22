import { Dropdown } from "./Dropdown";
import SearchBar from "./SearchBar";

interface FiltersContainerProps {
  searchText: string;
  setSearchText: (text: string) => void;
  genderFilter: string;
  setGenderFilter: (gender: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}

export default function FiltersContainer({
  searchText,
  setSearchText,
  genderFilter,
  setGenderFilter,
  statusFilter,
  setStatusFilter,
}: FiltersContainerProps) {
  return (
    <div className="bg-surface-container p-6 rounded-lg border-l-2 border-outline-variant/20 relative">
      <div className="texture-overlay absolute inset-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-end">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />

        <Dropdown
          title="Genero"
          options={["", "Male", "Female"]}
          selected={genderFilter}
          setSelected={setGenderFilter}
        />

        <Dropdown
          title="Estado Vital"
          options={["", "Active", "Deceased"]}
          selected={statusFilter}
          setSelected={setStatusFilter}
        />
      </div>
    </div>
  );
}
