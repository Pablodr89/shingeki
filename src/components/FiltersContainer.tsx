"use client";
import { usePathname } from "next/navigation";
import { Dropdown } from "./Dropdown";
import SearchBar from "./SearchBar";
import { AppRoutes } from "@/AppRoutes";
import { Gender, Status, Alliance } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";

interface FiltersContainerProps {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  genderFilter?: Gender;
  setGenderFilter?: Dispatch<SetStateAction<Gender>>;
  statusFilter?: Status;
  setStatusFilter?: Dispatch<SetStateAction<Status>>;
  alliance?: Alliance;
  setAlliance?: Dispatch<SetStateAction<Alliance>>;
}

export default function FiltersContainer({
  searchText,
  setSearchText,
  genderFilter = Gender.ALL,
  setGenderFilter,
  statusFilter = Status.ALL,
  setStatusFilter,
  alliance = Alliance.ALL,
  setAlliance,
}: FiltersContainerProps) {
  const pathname = usePathname();

  return (
    <div className="bg-surface-container p-6 rounded-lg border-l-2 border-outline-variant/20 relative">
      <div className="texture-overlay absolute inset-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-end">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          setStatusFilter={setStatusFilter}
          setGenderFilter={setGenderFilter}
          setAlliance={setAlliance}
        />

        {pathname.includes(AppRoutes.home) ? (
          <>
            {genderFilter !== undefined && setGenderFilter && (
              <Dropdown
                title="Genero"
                options={[Gender.ALL, Gender.MALE, Gender.FEMALE]}
                selected={genderFilter}
                setSelected={setGenderFilter}
                setSearchText={setSearchText}
              />
            )}

            {statusFilter !== undefined && setStatusFilter && (
              <Dropdown
                title="Estado Vital"
                options={[Status.ALL, Status.ACTIVE, Status.DECEASED]}
                selected={statusFilter}
                setSelected={setStatusFilter}
                setSearchText={setSearchText}
              />
            )}
          </>
        ) : (
          alliance !== undefined &&
          setAlliance && (
            <Dropdown
              title="Alianza"
              options={[
                Alliance.ALL,
                Alliance.ELDIA,
                Alliance.MARLEY,
                Alliance.NONE,
              ]}
              selected={alliance}
              setSelected={setAlliance}
              setSearchText={setSearchText}
            />
          )
        )}
      </div>
    </div>
  );
}
